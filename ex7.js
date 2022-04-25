function main() {
    let numbers = []
    let yo25 = 0
    let yo50 = 0
    let yo75 = 0
    let yo99 = 0

    while (true) {
        // ler a resposta do usuário
        let input = prompt('Insira uma idade: (insira um numero negativo para sair)')
        // checar se a resposta do usuário possui algum
        // caracter que não seja número.
        // se input for "", ele retornará 0, então não cai
        // na regex.
        if (input.match('-') !== null)
            break

        numbers.push(input)
    }

    for (let i of numbers) {
        if (i <= 25) yo25++
        else if (i <= 50) yo50++
        else if (i <= 75) yo75++
        else yo99++
    }

    document.querySelector('#till25').innerHTML = `Até 25 anos: ${yo25}`
    document.querySelector('#till50').innerHTML = `Até 50 anos: ${yo50}`
    document.querySelector('#till75').innerHTML = `Até 75 anos: ${yo75}`
    document.querySelector('#till99').innerHTML = `Até 100 anos: ${yo99}`
}

main()