function stringChop(str, size) {
  // your code here
	let arr=[];
  size = Number(size);
  if(str === null){
      return arr;
  }
  for(let i=0;i<str.length;i=i+size){
      let newWord = str.slice(i,i+size);
      arr.push(newWord);
  }
  return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));
