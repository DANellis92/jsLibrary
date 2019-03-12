let studentName = 'pAuL';
let capName;

for (let x in studentName) {
    if (x == 0) {
        capName = studentName[x].toUpperCase();
    } else {
        capName += studentName[x].toLowerCase();
    }
}
console.log(capName);



function main() {
    let a = 1;
    let b = 2;
    let c = -3;
    mystery(a, b, c);
    mystery(c, 4, a);
    mystery(a + b, b + c, c + a);
}

function mystery(c, a, b) {
    console.log(b + "+" + c + "=" + a)
}

main();







sarahPalindrome(String); {
    var l = str.length();
    for (n = 0; n < l / 2; n + 1) {
        if (str.charAt(n) !== str.charAt(l - n - 1)) return false;
        return true;
    }
}

console.log(sarahPalindrome('racecar'));



/*
function palindrome(str) {
    const racecar = /[^A-Za-z0-9]/g;
    var re = racecar;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

str = 'racecar';
palindrome();