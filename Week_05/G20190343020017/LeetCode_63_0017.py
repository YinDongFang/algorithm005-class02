class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m, n = len(obstacleGrid[0]), len(obstacleGrid)
        dp = [0, 1] + [0] * (m - 1)
        for i in range(n):
            for j in range(m):
                dp[j + 1] = 0 if obstacleGrid[i][j] else dp[j] + dp[j + 1]
        return dp[-1]