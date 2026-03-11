const prod1 = {} //criando objeto e lançando os atributos depois
prod1.nome = 'iPhone 17 Pro Max'
prod1.preco = 10499.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = { //criando objeto e já dando os atributos
    nome: 'Cuscuz',
    preco: 5.90
}

'{"nome": "Cuscuz", "preco": 5.90}' //criando um json, json é um objeto totalmente textual

console.log(prod2)