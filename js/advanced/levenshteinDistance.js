/*
Given two strings, compute the Levenshtein distance between them i.e. the minimum number of edits required to convert one string into the other.

For example, the Levenshtein distance between "kitten" and "sitting" is 3.

The minimum steps required to transform the former into latter are:

kitten → sitten (substitution of "s" for "k")
sitten → sittin (substitution of "i" for "e")
sittin → sitting (insertion of "g" at the end)

Mathematically, the Levenshtein distance between two strings a, b (of length i and j respectively) is given by leva,b (i, j) where

leva,b(i, j) = max(i, j)    if min(i, j) = 0,
                  min( lev a,b(i-1, j) + 1, lev a,b(i, j-1) + 1, lev a,b(i-1, j-1) + cost )   otherwise.

where cost is 0 when a = b and 1 otherwise.
*/
