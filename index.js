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

module.exports = {sum, mult, breakChocolate};
