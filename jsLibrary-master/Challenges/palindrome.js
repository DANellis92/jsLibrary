
isPalindrome(String str) {
    int n = str.length();
    for (int i = 0; i < n / 2; ++i) {
        if (str.charAt(i) != str.charAt(n - i - 1)) return false;
    }
    return true;
}

/*
sarahPalindrome(String); {
    l = str.length();
    for (n = 0; n < l / 2; n + 1) {
        if (str.charAt(n) != str.charAt(l - n - 1)) return false;
        return true;
    }
}


sarahPalindrome(String)

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

palindrome("racecar");


function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
palindrome("A man, a plan, a canal. Panama");

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
palindrome("A man, a plan, a canal. Panama");

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");
*/