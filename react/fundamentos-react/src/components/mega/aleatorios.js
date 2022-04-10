// function gerarNumerosAleatorios(maxNumeros) {
//   let list =[];

//   const min = 1;
//   const max = 60;
  
//   for (let i = 0; i < maxNumeros; i++) {
//     // list[i] = i + 1
//     list[i] = parseInt(Math.random() * (max - min) + min);
//   }
//   return list
// }

// const maxNumeros = 7;
// console.log(gerarNumerosAleatorios(maxNumeros));

function gerarNumeroNaoContido(min, max, array) {
  const numeroAleatorio = parseInt(Math.random() * (max - min + 1)) + min; // + 1  inclui, tanto o mínimo quanto o máximo nos resultados

  return array.includes(numeroAleatorio) ? 
    gerarNumeroNaoContido(min, max, array) : // caso o array possua/inclua(indludes) o numero gerado o numero aleatorio vai ser gerado novamente, portanto a função gerarNumeroNaoContido vai ser chamada novamente para ele gerar um novo número
    numeroAleatorio // caso contrario o a função vai retornar o número aleatório

    // como é uma chamada recursiva precisamos dessa condição de parada, que nesse caso é o retorno do numeroAleatorio
}

function gerarNumeros(quantidade) {
  const arrayNumeros = Array(quantidade)
    .fill(0) // para preencher esse array inicalmente com zeros
    .reduce((nums) => { // ele vai receber o acumulador(nums), que nada mais que que o novo array que vai ser gerado e todos os elementos desse array atual que só contem zeros
      const novoNumero = gerarNumeroNaoContido(1, 60, nums);

      console.log([...nums, novoNumero]);
      return [...nums, novoNumero]; // vai returnar um array que vai conter todos os nums gerados anteriormente e mais o novo novoNumero que acabamos de gerar (vai acumulando)

    }, []) // vamos passar um array vazio inicial 
    .sort() // para ordenar os numeros

  return arrayNumeros;
}

console.log(gerarNumeros(7));