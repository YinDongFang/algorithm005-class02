/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;
    s = Array.from(s).sort().join('');
    t = Array.from(t).sort().join('');
    return s === t;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length)
        return false;
    let list = {};
    Array.from(s).forEach(char => {
        if (list.hasOwnProperty(char))
            list[char] += 1;
        else
            list[char] = 1;
    });
    return Array.from(t).every(char => {
        if (list.hasOwnProperty(char)) {
            list[char] -= 1;
            if (list[char] >= 0)
                return true;
        }
        return false;
    });
}