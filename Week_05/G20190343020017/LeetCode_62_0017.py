class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        cache = [1 for i in range(m)]
        for i in range(n - 1):
            for i in range(m - 1):
                cache[m - i - 2] += cache[m - i - 1]
        return cache[0]