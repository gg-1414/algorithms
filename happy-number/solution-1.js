var isHappy = function(n) {
    if (n < 10) {
        if (n === 1) { return true }
    } else {
        n = n.toString().split('').reduce((sum, digit) => {
            let int = parseInt(digit) * parseInt(digit);
            return sum + int;
        }, 0)
        return isHappy(n)
    }
    return false;
};

console.log(isHappy(19));
console.log(isHappy(1));
console.log(isHappy(2));
console.log(isHappy(55));
console.log(isHappy(198));
