import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../constants/firebase";

export const getPosts = async () => {
    const data = await getDocs( collection(db, "posts/") );
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}