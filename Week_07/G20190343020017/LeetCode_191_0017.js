/**
 * 位运算，末位1置0
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n) {
        count ++;
        n &= n - 1;
    }
    return count;
};
/**
 * 位运算，计算末位后右移
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
};
/**
 * 转数组计数
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    Array.from(n.toString(2)).forEach(bit => {
        count += bit == 1;
    });
    return count;
};