function verificar(){
    var data =  new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Insira um ano válido')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            window.document.body.style.background = '#00ccff'
            
            if (idade >= 0 && idade < 12) {
                //bebê
                img.setAttribute('src', 'homem-bebe.png')
                } else if (idade >= 12 && idade < 18) {
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
                } else if (idade >= 18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
                } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', 'homem-velho.png')
                }


        }else {
            genero = 'Mulher'
            window.document.body.style.background = '#ff99ff'


            if (idade >= 0 && idade < 12) {
                //bebê
                img.setAttribute('src', 'mulher-bebe.png')
                } else if (idade >= 12 && idade < 18) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
                } else if (idade >= 18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulto.png')
                } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', 'mulher-velho.png')
                }
                

        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero}, ${idade} Anos.`
        res.appendChild(img) 
    }

}