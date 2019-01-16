function strip(str) {
  //"       adopt a dog!\n\n\n"
  //get rid of extra spaces in the beginning
  let indexZero = 0
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== " ") {
      indexZero = i;
      break;
    }
  }
  let returnString = str.slice(indexZero)
  return returnString
  //get rid of extra spaces in the end
  // for(let i = returnString.length - 1; i > 0; i--) {
  //   if(returnString[i] !== "\n") {
  //     indexZero = i;
  //   }
  // }
  // return returnString.slice(0, indexZero)
}

console.log(strip("       adopt a dog!\n\n\n"))
