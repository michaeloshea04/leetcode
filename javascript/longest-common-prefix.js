//14. Longest Common Prefix

const stringArray = ["leetcoder", "leetcode", "leetbulb"];

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";
    let prefix = strs[0];
    
    for (i = 1; i < strs.length; i++){
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.isEmpty) return "";
        }
    }   

    return prefix;    
};

console.log(longestCommonPrefix(stringArray));