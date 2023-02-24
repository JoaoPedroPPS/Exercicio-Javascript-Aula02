function contar() {
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
   window.alert('impossivel contar!')
  } else {
    res.innerHTML = "contando... <br>";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if(p <=0 ){
        res.innerHTML = 'Passo Inválido'
    }else {
        if (f > i){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} ⏩`
            }
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} ⏩`
            }
        }
        res.innerHTML += `🏁`
    }
    
    
    
  }
}
