import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const fetchImage = (imagePath) => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const imageRef = storageRef.child(imagePath);

  return imageRef
    .getDownloadURL()
    .then((url) => {
      return url;
    })
    .catch((error) => {
      console.error("Error getting download URL: ", error);
      throw error; // Propagate the error
    });
};
export default fetchImage;
