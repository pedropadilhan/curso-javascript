function adicionar(){
    let num = document.getElementById('txtn')
    let cont = document.getElementById('selcont')
    let lista = []
    if (num.value < 0 && num.value > 100 ) {
        window.alert('valor inválido ou já encontrado na lista')
    }
}

/* function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite umn número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            // cria dinamicamente as option no html
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            // Adiciona um value em cada uma das option
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
} */