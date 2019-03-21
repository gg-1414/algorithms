## Binary Gap

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].

### Example 1:

- Input: N = 9
- Output: 2
- Explanation: The number 9 has binary representation 1001 and contains a binary gap of length 2

### Example 2:

- Input: N = 529
- Output: 4
- Explanation: The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3

### Example 3:

- Input: N = 32
- Output: 0
- Explanation: The number 32 has a binary representation 100000 and no binary gaps

### Example 4:

- Input: N = 15
- Output: 0
- Explanation: The number 15 has a binary representation of 1111 and no binary gaps
