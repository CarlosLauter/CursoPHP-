console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Peixe'
//obj1['nome'] = 'Bola2' seria o mesmo que o de cima
console.log(obj1.nome)

function Obj(nome) { //isso aqui é basicamente um construtor em java
    this.nome = nome 
    this.exec = function() { //Possível botar uma função dentro de um construtor
        console.log('Cuidado com os limões')
    }
}

const obj2 = new Obj('Limonada') //construindo o objeto e passando parâmetro
const obj3 = new Obj('Cuscuz')
console.log(obj2.nome) //chamando parâmetro dentro do objeto
console.log(obj3.nome)

console.log(`Eu como muito ${obj3.nome} e tomo muita ${obj2.nome}`) //printando os parâmetros usando string template
obj3.exec() //chamando função dentro dos objeto criado