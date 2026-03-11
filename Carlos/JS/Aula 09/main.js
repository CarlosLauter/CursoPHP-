const valores = [7.7, 8.9, 6.3, 9.2] //declarando array
console.log(valores[0], valores[3]) //mostrando como mostrar algum elemento específico
console.log(valores[4]) //posso printar um elemento não existente no array

valores[4] = 10 //agregando valor no array na casa vazia logo em seguida
console.log(valores)
valores[10] = 10  //posso agregar valor em qualquer casa vazia do array
console.log(valores)
console.log(valores.lenght) //mostra quantidade de itens no array

valores.push({id: 3}, false, null, 'teste') //push usado para jogar um valor no array, js aguenta arrays heterogeneos
console.log(valores)

console.log(valores.pop()) //printa e retira último item do array
delete valores[0] //deleta um valor especifico do array
console.log(valores)

console.log(typeof valores) //mostra o tipo do array
