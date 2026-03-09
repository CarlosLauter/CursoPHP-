const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` //Muito louco esse template com crase
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`) //ainda usando template ainda consegue fazer isso

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)