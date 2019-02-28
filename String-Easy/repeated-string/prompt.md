## Sock Merchant

Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.

For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac, the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

### Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

- s: a string to repeat
- n: the number of characters to consider

### Example 1:

#### Input:
s = aba
n = 10

#### Output:
7

#### Explanation:
The first n = 10 letters of the infinite string are abaabaabaa. Because there are 7 a's, we print 7 on a new line.

### Example 2:

#### Input:
s = a
n = 1000000000000

#### Output:
1000000000000

#### Explanation:
Because all of the first n = 1000000000000 letters of the infinite string are a, we print 1000000000000 on a new line.
