const firebaseTimestampToDate = timestamp => {
  if (!!timestamp && timestamp._seconds && timestamp._nanoseconds) {
    return new Date(timestamp._seconds * 1000);
  }

  return new Date();
};

const getFirebaseImageLink = (imgSrc: string) => {
  const firebaseStorage = 'https://firebasestorage.googleapis.com/v0/b/';
  const bucket = `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}/o/`;
  const imageName = imgSrc.replaceAll('/', '%2F');
  return firebaseStorage + bucket + imageName + '?alt=media';
};

export { firebaseTimestampToDate, getFirebaseImageLink };
