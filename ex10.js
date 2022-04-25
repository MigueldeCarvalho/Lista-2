function main() {
    let cont = 0
    let names = []

    while (cont < 15) {
        // ler a resposta do usuário
        let input = prompt('Insira um nome de uma cidade: (falta mais ' + (15 - cont) + ' cidades)')

        // checar se a resposta do usuário possui algum
        // caracter que não seja letra.

        names.push(input)
        cont++
    }

    document.querySelector('#nameWrapper').remove()
    let wrapper = document.createElement('div')
    wrapper.id = 'nameWrapper'
    document.body.append(wrapper)

    console.log(names.sort().reverse())
    for (let i of names.sort().reverse()) {
        let elmt = document.createElement('p')
        elmt.innerHTML = i
        wrapper.appendChild(elmt)
    }
}