function digitalRoot(number) {
  var length = Math.log(number) * Math.LOG10E + 1 | 0;
  if( number < 10 ) {
    return number;
  } else {
    let sum = 0;
    for( let i = 0; i < length; i++ ) {
      sum += number % 10;
      number = Math.floor( number / 10 );
    }
    return digitalRoot(sum);
  }
}
