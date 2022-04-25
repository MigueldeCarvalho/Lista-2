function main() {
    let cont = 0
    let numbers = []
    let primes = []
    let primesSum = 0

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
        if (checkPrime(i))
            primes.push(i)
    }

    for (let i of primes)
        primesSum += i

    document.querySelector('#numbers').innerHTML = numbers
    document.querySelector('#primes').innerHTML = primes
    document.querySelector('#primes').innerHTML += `. Totalizando ${primes.length} número(s)`
    document.querySelector('#primesSum').innerHTML = primesSum
}

function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false
    }

    return true
}

main()