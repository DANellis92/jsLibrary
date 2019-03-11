let rnbow = ['red', 'blue', 'green', 'yellow'];
let suff = ['st', 'nd', 'rd', 'th'];

function colorByNumber(color, sufx) {
    for (let x = 0; x <= 3; x++) {
        console.log(color[x]);
        console.log(sufx[x]);
    }
}
colorByNumber(rnbow, suff)

function colorByNumber(color, sufx) {
    for (let x = 0; x <= 3; x++) {
        console.log(`${x}${sufx[x]} is ${color[x]}`);
    }
}