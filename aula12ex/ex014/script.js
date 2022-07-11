function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 07  //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'img/manha.jpg'
        document.body.style.background = '#f1cfbb'
    } else if(hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#fcad05'
    } else {
        //BOA NOITE!
        img.src = 'img/noite.jpg'
        document.body.style.background = '#011f37'
    }
}