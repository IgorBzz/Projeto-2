// Função para o jogo de soma de números
function jogoSomaNumeros() {
  // Modifica o título e conteúdo da página
  const titulo = document.querySelector("h1")
  const tituloOriginal = titulo.innerHTML
  titulo.innerHTML = "Jogo do número secreto"

  const conteudo = document.querySelector(".subtitle")
  const conteudoOriginal = conteudo.innerHTML
  conteudo.innerHTML = "Vamos jogar para esquentar!"

  // Lógica do jogo de soma
  const num1 = Number.parseInt(prompt("Digite o primeiro número inteiro:"))
  const num2 = Number.parseInt(prompt("Digite o segundo número inteiro:"))

  // Validação dos números
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, digite apenas números válidos!")
    // Restaura o conteúdo original
    titulo.innerHTML = tituloOriginal
    conteudo.innerHTML = conteudoOriginal
    return
  }

  const resultado = num1 + num2
  alert("A soma dos números é: " + resultado)

  // Restaura o conteúdo original após o jogo
  titulo.innerHTML = tituloOriginal
  conteudo.innerHTML = conteudoOriginal
}

// Função para o jogo de calcular média
function jogoCalcularMedia() {
  // Perguntar a quantidade de números
  const quantidadeStr = prompt("Quantos números você deseja inserir para calcular a média?")
  const quantidade = Number.parseInt(quantidadeStr)

  // Validação: Verifica se a entrada é um número válido e maior que zero
  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Por favor, digite um número válido e maior que zero.")
    return // Encerra a função se a entrada for inválida
  }

  const numeros = []
  let soma = 0

  // Pedir cada número usando um laço (loop)
  for (let i = 0; i < quantidade; i++) {
    const numeroStr = prompt(`Digite o ${i + 1}º número:`)
    const numero = Number.parseFloat(numeroStr)

    // Validação: Verifica se cada número inserido é válido
    if (isNaN(numero)) {
      alert("Entrada inválida. Por favor, digite apenas números. O cálculo será redefinido.")
      return // Encerra a função
    }

    numeros.push(numero)
    soma += numero // Adiciona o número à soma total
  }

  // Calcular a média
  const media = soma / quantidade

  // Mostrar o resultado usando alert
  alert(`Os números digitados foram: ${numeros.join(", ")}\nA média entre eles é: ${media.toFixed(2)}`)
}

// Função para o jogo do número secreto
function jogoNumeroSecreto() {
  alert("Seja bem-vindo ao nosso jogo!")

  // Gera um número secreto aleatório entre 1 e 10
  const numeroSecreto = 5 // Mantendo fixo
  console.log(numeroSecreto) // (Para testes, (deu bom))

  // Variável para armazenar o chute do usuário
  let chute
  let tentativas = 0 // Inicia o contador de tentativas

  while (chute != numeroSecreto) {
    chute = Number.parseInt(prompt("Escolha um número entre 1 e 10"))
    tentativas++ // Soma +1 a cada tentativa

    if (chute == numeroSecreto) {
      alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`)
    } else if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}. Tente novamente.`)
    } else {
      alert(`O número secreto é maior que ${chute}. Tente novamente.`)
    }
  }
}
