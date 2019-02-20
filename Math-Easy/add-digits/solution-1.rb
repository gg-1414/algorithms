def add_digits(num)
    num_digits = num.digits
    if num_digits.count == 1
        return num
    else
        sum = 0
        for i in 0..num_digits.count
            sum += num_digits[i].to_i
        end
        return add_digits(sum)
    end
end
