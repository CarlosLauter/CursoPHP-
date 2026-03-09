const escola = "COC Colégio SP"

console.log(escola.charAt(5)) //Serve para pegar apenas uma letra onde você passa o parametro dela
console.log(escola.charAt(200)) //Não vai mostrar nada, mas não gera erros
console.log(escola.charCodeAt(3)) //Fala o valor na tabela ASCI ou Unicode
console.log(escola.indexOf('é')) //Diz posição da letra no parametro ou palavra
console.log(escola.substring(1)) //Imprime do índice passado pelo parâmetro para frente
console.log(escola.substring(0, 3)) //Vai do indice 0 incluindo 0 até indice 3 sem incluir 3

console.log('Escola '.concat(escola.concat("!"))) //Concatena string com uma variaver
console.log('Escola ' + escola + '!')//Gera o mesmo resultado que de cima
console.log(escola.replace('SP', 'Ajuzin')) //Troca um termo passado por um outro termo

console.log('Ana, Maria, Pedro'.split(',')) //Gera um array passando um parametro como função de divisão
console.log('Ana1Maria1Pedro1'.split('1')) //Gera o mesmo resultado da de cima
