const nestedFunc = () => {
  console.log("here");
  return () => {
    console.log('soidfjosdijf');
  }
}

nestedFunc()();