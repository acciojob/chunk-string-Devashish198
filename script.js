function stringChop(str, size) {
  let arr = [];

  if (str === null) {
    return arr;
  }

  size = Number(size);

  for (let i = 0; i < str.length; i += size) {
    let newWord = str.slice(i, i + size);
    arr.push(newWord);
  }

  return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size).toString());