// var isHappy = function(n) {
//     if (n < 10) {
//         if (n === 1) { return true }
//     } else {
//         let sum = 0;
//
//         for (let i = n; i > 0; i /= 10) {
//             let digit = i % 10;
//             sum += (digit * digit);
//         }
//         console.log(Math.ceil(sum));
//         // return isHappy(sum);
//     }
//     return false;
// };

// var squareSum = function(n) {
//   let sum = 0;
//   let tmp;
//
//   while (n) {
//     tmp = n % 10;
//     sum += tmp * tmp;
//     n /= 10;
//   }
//   return sum;
// }

// console.log(squareSum(19));
// console.log(isHappy(19));
// console.log(isHappy(1));
// console.log(isHappy(2));
// console.log(isHappy(55));
// console.log(isHappy(198));
