function main() {
    let cont = 0
    // todos os numeros
    let numbers = []
    // impares
    let oddNumbers = []
    let sumOdd = 0
    // pares
    let evenNumbers = []
    let sumEven = 0

    while (cont < 15) {
        let input = prompt('Insira um número: (falta mais ' + (15 - cont) + ' números)')

        numbers.push(Number(input))
        cont++
    }

    for (let i of numbers) {
        if (i % 2 == 0)
            evenNumbers.push(i)
        else
            oddNumbers.push(i)
    }

    for (let i of oddNumbers)
        sumOdd += i

    for (let i of evenNumbers)
        sumEven += i

    document.querySelector('#odd').innerHTML = 'Soma dos ímpares: ' + sumOdd
    document.querySelector('#even').innerHTML = 'Soma dos pares: ' + sumEven
    document.querySelector('#numbers').innerHTML = numbers
}

main()