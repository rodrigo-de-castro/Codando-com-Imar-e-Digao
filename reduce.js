//Reduce
const numeros = [ 10, 2, 8, 3, 12, 7]

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
  }, 10)

  console.log("somaDosNumerosComeçandoCom10", somaDosNumerosComeçandoCom10); */

/* const nomes = ["Tereza", "Ricardo", "Yuri", "Bruna", "Eduardo"];

const primeirasLetras = nomes.reduce((concat, nome) => concat + nome[0], "")

console.log(primeirasLetras); */

/* const pessoas = [
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

const profissoesDasPessoas = pessoas.reduce((profissoes, pessoaAtual)=>{
  profissoes.push(pessoaAtual.profissão)
  return profissoes
}, [])

console.log(profissoesDasPessoas); */

// Créditos ao nosso colega Leandro Bonfim

const data = [4, 5, 2, 8, 4, 6, 9, 7, 5, 3, 1, 5];

const resultReduce= data.reduce((prev, item) => {
  const obj = {}
  obj.sum = prev.sum + item
  obj.sub = prev.sub - item
  obj.mult = prev.mult * item
  return obj
}, {sum: 0, sub: 0, mult: 1})

console.log(resultReduce);

/* function meuReduce(calback, acc) {
  const array = [...this];
  let acumulador = acc
  if(acc === undefined){
      acumulador = array[0]
  }
  for (let ind = acc !== undefined? 0: 1 ; ind < array.length; ind++) {
    const element = array[ind];
    const prev = acumulador
    const retornoCalback = calback(prev, element, ind,array);
    acumulador = retornoCalback
  }

  return acumulador;
}

data.meuReduce = meuReduce;

const resultmeuReduce = data.meuReduce((prev, item) => {
    const obj = {}
    obj.sum = prev.sum + item
    obj.sub = prev.sub - item
    obj.mult = prev.mult * item    
    return obj
}, {sum: 0, sub: 0, mult: 1}); 

console.log(resultmeuReduce); */
