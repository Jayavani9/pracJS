// revStr.js
const revStr = (str) => {
    let ans = "";
    for (var i = str.length - 1; i >= 0; i--) {
        ans += str[i];
    }
    return ans;
};

module.exports = revStr;
