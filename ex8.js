function main() {
    let limit = Number(document.querySelector('#num').value)
    if (limit <= 0) limit = 3

    let i = 1
    let n = 0
    let sum = 0
    let foundNums = []

    while (foundNums.length < limit) {
        i = 0
        sum = 0

        while (i < n) {
            if (n % i === 0)
                sum += i
            
            i++
        }

        if (sum === n)
            foundNums.push(n)
        
        n++
    }

    document.querySelector('#numbers').innerHTML = foundNums
}

main()