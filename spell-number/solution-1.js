function spell(num) {

  const dict2 = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const stringNum = num.toString()
  const digits = stringNum.length
  const dict1 = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty"
  }

  if (num >= 0 && num <= 20) {
    return dict1[num]
  } else if (num <= 99 && stringNum[1] !== '0') {
    //convert the ten digit
    const firstHalf = dict2[parseInt(stringNum[0]) - 2]
    const secondHalf = spell(stringNum[1])
    return firstHalf + ' ' + secondHalf
  } else if (num <= 99 && stringNum[1] === '0') {
    return dict2[parseInt(stringNum[1])]
  }
}

console.log(spell(25))
