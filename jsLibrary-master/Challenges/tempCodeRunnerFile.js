function sarahPalindrome(str) {
    var l = str.length;
    for (var n = 0; n < l / 2; n + 1) {
        if (str.charAt(n) !== str.charAt(l - n - 1)) return false;
        return true;
    }
}

sarahPalindrome('racecar');
// => true

sarahPalindrome('henry');

console.log(sarahPalindrome('racecar'));