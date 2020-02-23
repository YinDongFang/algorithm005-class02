class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        dp = [[0] * m for i in range(n)]
        # 初始化第一行
        for i, char in enumerate(text1):
            if char == text2[0]:
                for n in range(i, len(text1)):
                    dp[0][n] = 1
                break
        # 初始化第一列
        for i, char in enumerate(text2):
            if char == text1[0]:
                for n in range(i, len(text2)):
                    dp[n][0] = 1
                break
        for i in range(1, len(text2)):
            for j in range(1, len(text1)):
                if text1[j] == text2[i]:
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        '''
        print(text1)
        for i, char in enumerate(text2):
            print(char + str(dp[i]))
        '''
        return dp[-1][-1]