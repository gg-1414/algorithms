function solution(N) {
  const binRep = N.toString(2); // converts N to binary representation

  let count = 0,
      oneChecker = false,
      gaps = [0];

  for( let i = 1; i < binRep.length; i++ ) {
    if( binRep[i] === '0' ) {
      count++;
    } else {
      oneChecker = !oneChecker;
      if( oneChecker === true ) { // basically checking if second 1 is hit
        gaps.push(count);
        count = 0;
        oneChecker = !oneChecker; // turns oneChecker back to false
        // turns true once second 1 is hit
      }
    }
  }
  return gaps.sort( (a, b) => { return b - a } )[0]; // sort number of gaps (descending) and returns the first element
}
