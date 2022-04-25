function main() {
    let cont = 0
    let weight = []
    let height = []

    while (cont < 15) {
       
        let input = prompt('Insira um peso: (falta mais ' + (15 - cont) + ' pesos)')
    
            continue
        }

        weight.push(Number(input))
        cont++
    }

    let input = prompt('Insira uma altura: (falta mais ' + (15 - cont) + ' altura)')
      


    height.push(Number(input))
    cont++


function calc() {

     if( person['weight'] >90){
        alert('Você está acima de 90 kg')
    }

    if( person1['height'] <1.60){
        alert('Você tem a estatura baixa')
        if(1.61<i && i<=1.85)
        alert('Você tem a estatura média')
        if(i >=1.86)
        alert('Você tem a estatura alta')
    }
       

    document.querySelector('#weight').innerHTML = weight
    document.querySelector('#height').innerHTML = height

}

