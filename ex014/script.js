function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('flair')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `${hora}:${min}`
    if(hora >= 0 && hora < 12){
        //bomdia
        img.src = 'manha.png'
        document.body.style.background = '#E64A8B'
        msg.style.color =  '#E64A8B'
    } else if (hora >= 12 && hora < 18){
        //bomtarde
        img.src = 'tarde.png'
        document.body.style.background = '#FFCE92'
        msg.style.color =  '#FFCE92'
    } else {
        //bonoite
        img.src = 'noite.png'
        document.body.style.background = '#000F33'
        msg.style.color =  '#000F33'
    }


}