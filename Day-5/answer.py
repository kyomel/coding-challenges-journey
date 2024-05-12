## Recursive Approach
def fibonacci_recursive(n):
    if n <= 1:
        return n
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)

## Optimizing with Memoization
def fibonacci_memoized(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_memoized(n - 1, memo) + fibonacci_memoized(n - 2, memo)
    return memo[n]

## Iterative Approach
def fibonacci_iterative(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for i in range(2, n + 1):
        a, b = b, a + b
    return b

## Binet’s Formula
from math import sqrt

def fibonacci_binet(n):
    phi = (1 + sqrt(5)) / 2
    return round(phi**n / sqrt(5))