/**
 * O(n^2);
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let res = [];
    for (let i = 0; i <= num; i++) {
        let count = 0;
        let num = i;
        while (num) {
            count++;
            num &= num - 1;
        }
        res.push(count);
    }
    return res;
};
/**
 * O(n);
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    if(num === 0)
        return [0];
    if(num === 1)
        return [0, 1];
    let res = [0, 1];
    for (let i = 1; i <= num; i++) {
        res[i] = res[i >>> 1] + res[i & 1];
    }
    return res;
};