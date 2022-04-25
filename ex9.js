function main() {
    let names = []

    while (true) {
        // ler a resposta do usuário
        let input = prompt('Insira um nome: (escreva "sair" para terminar)')
        if (input.match('sair') !== null)
            break

        // checar se a resposta do usuário possui algum
        // caracter que não seja letra.

        names.push(input)
    }

    let wrapper = document.querySelector('#nameWrapper')
    for (let i of names.sort()) {
        let elmt = document.createElement('p')
        elmt.innerHTML = i
        wrapper.appendChild(elmt)
    }
}