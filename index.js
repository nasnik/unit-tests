function sum(a, b){
    return a + b;
}

function mult(a, b){
    return a*b;
}

function breakChocolate(n,m) {
    if(n <= 0 || m <=0) return 0;
    return (n * m) - 1;
}

function converter (mpg) {
    let val = 0.3540060435382138*mpg;
    val = val.toFixed(2);
    if (val.charAt(val.length-1) == '0') { // xx.00
        val = val.substr(0, val.length-1);
    }
    return Number(val);
}

function slope(points){
    let slope;
    if(points[2] - points[0] === 0) return 'undefined';
    slope = (points[3] - points[1])/(points[2] - points[0])
    return slope.toString();
}
function past(h, m, s){
    let ms;
    ms = (((h * 60) + m)* 60 + s) * 1000;
    return ms;
}
function howMuchILoveYou(nbPetals) {
    let num = (nbPetals - 1) % 6;
    const petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    return petals[num];
}

module.exports = {sum, mult, breakChocolate, converter, slope, past, howMuchILoveYou};
