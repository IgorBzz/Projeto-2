"use client"

export default function HomePage() {
  // Função para o Jogo do Número Secreto
  function jogarNumeroSecreto() {
    alert("Seja bem-vindo ao nosso jogo!")

    // Gera um número secreto aleatório entre 1 e 10
    const numeroSecreto = Math.floor(Math.random() * 10) + 1
    console.log(numeroSecreto) // Para testes

    let chute
    let tentativas = 0

    while (chute != numeroSecreto) {
      chute = Number.parseInt(prompt("Escolha um número entre 1 e 10"))
      tentativas++

      if (chute == numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`)
      } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}. Tente novamente.`)
      } else {
        alert(`O número secreto é maior que ${chute}. Tente novamente.`)
      }
    }
  }

  // Função para Calcular Média
  function calcularMedia() {
    // 1. Perguntar a quantidade de números.
    const quantidadeStr = prompt("Quantos números você deseja inserir para calcular a média?")
    const quantidade = Number.parseInt(quantidadeStr)

    // Validação: Verifica se a entrada é um número válido e maior que zero.
    if (isNaN(quantidade) || quantidade <= 0) {
      alert("Por favor, digite um número válido e maior que zero.")
      return // Encerra a função se a entrada for inválida.
    }

    const numeros = []
    let soma = 0

    // 2. Pedir cada número usando um laço (loop).
    for (let i = 0; i < quantidade; i++) {
      const numeroStr = prompt(`Digite o ${i + 1}º número:`)
      const numero = Number.parseFloat(numeroStr)

      // Validação: Verifica se cada número inserido é válido.
      if (isNaN(numero)) {
        alert("Entrada inválida. Por favor, digite apenas números. O cálculo será redefinido.")
        return // Encerra a função.
      }

      numeros.push(numero)
      soma += numero // Adiciona o número à soma total.
    }

    // 3. Calcular a média.
    const media = soma / quantidade

    // 4. Mostrar o resultado.
    alert(`Os números digitados foram: ${numeros.join(", ")}\nA média entre eles é: ${media.toFixed(2)}`)
  }

  // Função para Somar Números
  function somarNumeros() {
    const num1 = Number.parseInt(prompt("Digite o primeiro número inteiro:"))
    const num2 = Number.parseInt(prompt("Digite o segundo número inteiro:"))

    const resultado = num1 + num2
    alert("A soma dos números é: " + resultado)
  }

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Aplicação Web - 3 Botões</h1>

      <button onClick={jogarNumeroSecreto} style={{ margin: "10px", padding: "15px 30px", fontSize: "16px" }}>
        Jogo do Número Secreto
      </button>

      <button onClick={calcularMedia} style={{ margin: "10px", padding: "15px 30px", fontSize: "16px" }}>
        Calcular Média
      </button>

      <button onClick={somarNumeros} style={{ margin: "10px", padding: "15px 30px", fontSize: "16px" }}>
        Somar Números
      </button>
    </div>
  )
}
