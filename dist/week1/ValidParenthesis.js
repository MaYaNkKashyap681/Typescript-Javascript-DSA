"use strict";
function isValid(s) {
    var stack = [];
    var obj = {
        '(': 1,
        '[': 2,
        '{': 3,
        ')': -1,
        ']': -2,
        '}': -3
    };
    if (obj[s[0]] < 0)
        return false;
    for (let i = 0; i < s.length; ++i) {
        if (obj[s[i]] < 0) {
            if (stack.length === 0)
                return false;
            let temp = obj[stack[stack.length - 1]] + obj[s[i]];
            if (temp === 0)
                stack.pop();
            else
                return false;
        }
        else {
            stack.push(s[i]);
        }
    }
    return stack.length ? false : true;
}
;
