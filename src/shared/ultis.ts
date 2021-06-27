const firebaseTimestampToDate = timestamp => {
  if (!!timestamp && timestamp._seconds && timestamp._nanoseconds) {
    return new Date(timestamp._seconds * 1000);
  }

  return new Date();
};

export { firebaseTimestampToDate };
