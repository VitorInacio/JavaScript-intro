//multabilidade altera um Objeto e altera todos

pessoa = {
    nome: 'Juviliane'
}
pessoa2 = pessoa;

console.log(pessoa.nome);
console.log(pessoa2.nome);

pessoa2.nome= 'Ju';

console.log(pessoa.nome);
console.log(pessoa2.nome);

pessoa.nome='João';

console.log(pessoa.nome);
console.log(pessoa2.nome);

pessoa3 = {
    nome: 'Jorge'
}
pessoa3 = pessoa;

console.log(pessoa3.nome);
