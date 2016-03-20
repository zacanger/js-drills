// levenshtein distance/ edit distance with DP
// d(i,0) = i
// d(0,j) = j
// d(i,j) = min (d(i-1,j)) + 1, d(i, j-1) + 1, d(i-1, j-1) + ch1 === ch2? 0: 1)
// dp a 2 d matrix to hold edit distances
// O(|x|*|y|)
// calculate row by row of this matrix

function kPalindrome(a, k){
  var n  = a.length
    , dp = new Array(n+1)
    , diff

  for (var i = 0; i < dp.length; i++) {
    dp[i] = new Array(n+1)
  }

  for (var i = 0; i <= n; i++) {
    dp[i][0] = dp[0][i] = i // line 2 & 3
  }

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      diff = (a.charAt(i-1)===a.charAt(n-j))?0:1
      // console.log(a.charAt(i-1)+ ' and ' +a.charAt(n-i))
      dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1]+diff)
    }
  }

  console.table(dp)
  return dp[n][n]
}

