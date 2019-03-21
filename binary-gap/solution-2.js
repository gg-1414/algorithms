function solution(N) {
  let bin = decToBinary(N),
      largestGap = 0,
      potentialGap = 0;

  for( let i = 0; i < bin.length; i++ ) {
    if( bin[i] === '1' ) {
      if( potentialGap > largestGap ) {
        largestGap = potentialGap;
        potentialGap = 0;
      }
    } else {
      potentialGap++;
    }
  }
  return largestGap;
}

function decToBinary(num) {
  let bin = '';
  while( num > 0 ) {
    bin = num % 2 + bin;
    num = Math.floor(num / 2);
  }
  return bin;
}
