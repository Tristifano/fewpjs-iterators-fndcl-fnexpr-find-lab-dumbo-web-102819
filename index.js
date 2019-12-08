

function superbowlWin(array) {
  let foundObj = array.find(data => data.result === "W");
  if (foundObj) {
    return foundObj.year
};
}
