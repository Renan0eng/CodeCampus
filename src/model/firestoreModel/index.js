import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../constants/firebase";

export const getPosts = async () => {
    const data = await getDocs( collection(db, "posts/") );
    return(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}

export const setPost = async (post) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
        relevance: post.relevance,
        authorId: post.authorId,
        authorName: post.authorName,
        authorAvatar: post.authorAvatar,
        authorAvatarSet: post.authorAvatarSet,
        date: post.date,
        title: post.title,
        desc: post.desc,
        tags: post.tags,
        images: post.images,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const setUsuario = async (User) => {

  const data = await getDocs( collection(db, "users") );

  if(data.docs.map((doc) => ({ ...doc.data(), uid: doc.uid })).find((doc) => doc.uid === User.uid) !== undefined) {
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "users"), User.providerData[0]);
  } catch (e) {
    console.log("Error adding document: ", e);
  }
}