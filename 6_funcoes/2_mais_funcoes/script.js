y = 50;

function numero() {
    y=200
    console.log(y);
}

console.log(y);
numero();

//  Atribuir uma função a uma variável
quadrado = function(x) {
    console.log(x * x);
}
quadrado(5);
quadrado(1);
quadrado(10);
console.log(typeof(quadrado));