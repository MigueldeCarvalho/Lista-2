function main() {
    let cont = 0
    let numbers = []
    let divisible = []

    while (cont < 15) {
        // ler a resposta do usuário
        let input = prompt('Insira um número: (falta mais ' + (15 - cont) + ' números)')
        // checar se a resposta do usuário possui algum
        // caracter que não seja número.
        // se input for "", ele retornará 0, então não cai
        // na regex.

        numbers.push(Number(input))
        cont++
    }

    for (let i of numbers) {
        // excluindo 0's por que não faz muito sentido,
        // visto que todo número é divisível por 0.
        if (i != 0 && i % 7 === 0)
            divisible.push(i)
    }

    document.querySelector('#numbers').innerHTML = numbers
    document.querySelector('#divisible').innerHTML = divisible
    document.querySelector('#divisible').innerHTML += `. Totalizando ${divisible.length} número(s)`
}

main()