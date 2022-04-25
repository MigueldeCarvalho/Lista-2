let pass = '5632'

function main() {
    let tries = 5
    while (tries != 0) {
        let passInput = prompt('digite a senha: (mais ' + tries + ' tentativas)')
        if (passInput !== pass) {
            tries--
            alert('Senha Incorreta')
            continue
        }

        alert('Senha Correta')
        break
    }

    if (tries <= 0) {
        alert('Senha Incorreta e tentativas chegaram a 0, reinicie o programa')
        return
    }

    alert('Senha Correta! Tentativas que sobraram: ' + tries)
}