carro = {
    portas : 2,
    portamalas : '200ml',
    motor : '2.0 turbo'
}

adicionais = {
    tetosolar: true,
    arcondicionado: true
}

console.log(carro);

Object.assign(carro, adicionais);
console.log(carro);