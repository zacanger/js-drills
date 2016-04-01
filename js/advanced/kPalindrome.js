// levenshtein distance/ edit distance with DP
// d(i,0) = i
// d(0,j) = j
// d(i,j) = min (d(i-1,j)) + 1, d(i, j-1) + 1, d(i-1, j-1) + ch1 === ch2? 0: 1)
// dp a 2 d matrix to hold edit distances
// O(|x|*|y|)
// calculate row by row of this matrix
