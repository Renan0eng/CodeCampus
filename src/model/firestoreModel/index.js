import { getDocs, collection } from "firebase/firestore";
import { db } from "../../constants/firebase";

export const getPosts = async () => {
  const data = await getDocs( collection(db, "posts") );
  console.log(data.docs.map( doc => doc.data() ));
  return data.docs.map( doc => doc.data() );
}