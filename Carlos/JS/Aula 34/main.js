const resultado = nota => nota >= 7 ? 'Aprovado' : "Reprovado" //operador ternário ? usa uma relação de começo e o resultado é exibido logo depois 

console.log(resultado(7.1))
console.log(resultado(6.9))

let valor1 = 12, valor2 = 13

const decisao = valor1 => valor1 > valor2 ? 'Compra' : 'Não compra'
console.log(decisao())

console.log(decisao(18))