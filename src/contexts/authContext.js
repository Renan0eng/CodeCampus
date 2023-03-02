import React, { useState, useEffect } from "react";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } 
from "firebase/auth";
import "../constants/firebase.js"
import { useNavigate } from "react-router-dom";
import { setUsuario} from "../model/firestoreModel";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const auth = getAuth();
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const logout = () => {
    signOut(auth).then(() => {
      sessionStorage.clear('user');
      sessionStorage.clear('token');
      setUser(null);
      navigate('/login');
    }).catch((error) => {
      alert(error);
    });
  }

  const login = (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const data = {
      email: formElements.email.value,
      password: formElements.password.value,
      persistent: formElements.persistent.checked,
    };

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
      const token = userCredential.user.getIdToken();
        // Signed in 
        const user = userCredential.user;
        setUser(user);
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('token', token);
        navigate('/', { user: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
        console.log(errorCode);
      });
  }

  const cadastro = (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const data = {
      email: formElements.email.value,
      password: formElements.password.value
    };

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
      const token = userCredential.user.getIdToken();
        // Signed in 
        const user = userCredential.user;
        setUser(user);
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('token', token);
        navigate('/', { user: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
        if(errorCode == 'auth/email-already-in-use'){
          alert('Email já cadastrado!');
        }else{
          alert(errorMessage);
        }
      });
  }

  const googleLogin = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info. 
      const user = result.user;
      setUser(user);
      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', token);
      navigate('/');
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(errorMessage);
      console.log(errorCode);
    });
  }

  return (
    <AuthContext.Provider value={{ user, googleLogin, login, cadastro, logout, signed: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}