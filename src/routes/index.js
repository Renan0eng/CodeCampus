import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/authContext"

// firebase
import { getDocs, collection } from "firebase/firestore";
import { db } from "../constants/firebase";

export const PrivateRoute = ({ }) => {

  const { signed } = useContext(AuthContext);

  return signed || sessionStorage.getItem('user') ? <Outlet /> : <Navigate to={"/"} />;
}

export const AdminRoute = ({ }) => {

  const getAdmin = async () => {
    const data = await getDocs(collection(db, "admin/"));
    const admins = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const admin = admins[0]
    const user = JSON.parse(sessionStorage.getItem('user'))
    if (user.uid === admin.id) return true
  }

  const admin = getAdmin()

  return admin ? <Outlet /> : <Navigate to={"/"} />;
}
