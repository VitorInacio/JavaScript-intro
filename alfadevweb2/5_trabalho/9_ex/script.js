numero = prompt("insira um número");

divisao = 0;

for ( i = numero; i > 0; i--) {
    if (numero % i == 0) {
        divisao++;
    }
}
if (divisao == 2) {
    console.log(divisao + '- O número ' + numero + ' é um número primo')
}else {
    console.log(divisao + '- O número ' + numero + ' não é um número primo')
}