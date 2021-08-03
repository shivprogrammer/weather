export default function shuffle(arr) {
  let currIndex = arr.length;
  let randIndex;
  while (currIndex !== 0) {
    randIndex = Math.floor(Math.random() * currIndex);
    currIndex--;
    [arr[currIndex], arr[randIndex]] = [
      arr[randIndex], arr[currIndex]];
  }
  return arr;
}