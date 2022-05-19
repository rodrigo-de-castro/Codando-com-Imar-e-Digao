const pessoas = [
    {
        nome: "Camila",
        sobrenome: "Mendes",
        idade: 33,
        profissão: "Advogada",
        filhos: ["Maria", "João"]
    },
    {
        nome: "Danilo",
        sobrenome: "Castro",
        idade: 28,
        profissão: "Motorista",
        filhos: ["Ana","Pedro", "João"]
    },
    {
        nome: "Carlos",
        sobrenome: "Oliveira",
        idade: 38,
        profissão: "Motorista",
        filhos: []
    },
    {
        nome: "Vitoria",
        sobrenome: "Medeiros",
        idade: 22,
        profissão: "Médica",
        filhos: ["Teresa","Lindomar", "Rubens"]
    },
]

//Anatomia da HOF
const resultado1 = pessoas.filter((pessoa) => "teste lógico")
// console.log(resultado1)

//Exemplos
//ForEach
// pessoas.forEach((pessoa) => console.log(`${pessoa.nome} ${pessoa.sobrenome}`))


const arrayFullName = [];

pessoas.forEach((pessoa) => arrayFullName.push(`${pessoa.nome} ${pessoa.sobrenome}`))

// console.log(arrayFullName);
// console.log(pessoas);

//Map
const arrayFullName2 = pessoas.map((pessoa) => `${pessoa.nome} ${pessoa.sobrenome}`)

// console.log("array nomes", arrayFullName2);

const idades = pessoas.map((pessoa) => pessoa.idade )
// console.log('array idade', idades);

const anosNasc = pessoas.map((pessoa) => {
    pessoa.anoNasc = 2022 - pessoa.idade
    return pessoa.anoNasc;
} )
// console.log('anos de nasc',anosNasc);
// console.log(pessoas);

//Filter
const idadeMaiorQue = pessoas.filter((pessoa) => pessoa.idade > 30)
//console.log("Pessoas com idade maior que 30", idadeMaiorQue);

const pessoasComFilhos = pessoas.filter((pessoa) => pessoa.filhos.length > 0 )
// console.log("Pessoas com filhos", pessoasComFilhos);

//Sort
const porIdade = pessoas.sort((pessoaA, pessoaB) => pessoaA.idade - pessoaB.idade)
// console.log(porIdade);

const compare = (a, b) =>  {
    if (a.nome > b.nome) {
    return 1;
    }
    if (a.nome < b.nome) {
    return -1;
    }
    return 0;
}; 

// const porNome = pessoas.sort(compare)
// console.log(porNome);
// console.log(pessoas);

//Some
const primeiraLetraC = pessoas.some((pessoa) => pessoa.nome[0] === 'C')
// console.log('Tem nome começando com C', primeiraLetraC);

const primeiraLetraF = pessoas.some((pessoa) => pessoa.nome[0] === 'F')
// console.log('Tem nome começando com F', primeiraLetraF);

//Every
const maisDeDezAnos = pessoas.every((pessoa) => pessoa.idade > 10)
// console.log("Todos têm mais de 10 anos?", maisDeDezAnos);

const todosTemFilhos = pessoas.every((pessoa) => pessoa.filhos.length > 0)
// console.log("Todos têm filhos?", todosTemFilhos);

//Find
const primeiroMotorista = pessoas.find((pessoa) => pessoa.profissão === "Motorista")
// console.log('Motorista', primeiroMotorista);

const primeiroJardineiro = pessoas.find((pessoa) => pessoa.profissão === "Jardineiro")
console.log('Jardineiro', primeiroJardineiro);

//Reduce
const numeros = [ 10, 2, 55, 3, 67, 33]

/* const somaDosNumeros = numeros.reduce((acc, curr) => {
  console.log('acc', acc);
  console.log('curr', curr);

  return acc + curr;
})

console.log("somaDosNumeros", somaDosNumeros); */

/* const somaDosNumerosComeçandoCom10 = numeros.reduce((acc, curr) => {
    console.log('acc', acc);
    console.log('curr', curr);
  
    return acc + curr;
  }, 13)

  console.log("somaDosNumerosComeçandoCom10", somaDosNumerosComeçandoCom10); */

  