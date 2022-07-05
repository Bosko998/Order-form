let prviInput = document.getElementById("prviInput")
let drugiInput = document.getElementById("drugiInput")
let priceParagraf = document.getElementById("priceParagraf")
let paragrafZaIspisOrderDetails = document.getElementById("paragrafZaIspisOrderDetails")
let paragrafZaIspisIme = document.getElementById("paragrafZaIspisIme")
let paragrafZaIspisAdrese = document.getElementById("paragrafZaIspisAdrese")
let paragrafZaIspisTotalOrder = document.getElementById("paragrafZaIspisTotalOrder")
let mojButton = document.getElementById("mojButton")
let checkBoxovi = document.getElementsByName("checkboxovi");

function reset () {
    document.getElementById("mojaForma").reset();    
}

mojButton.addEventListener("click", ()=>{
  imeKorisnika = prviInput.value;
  adresaKorisnika = drugiInput.value;
  let zbirVrednostiCheckBoxova = 0;
  priceParagraf.value = 150;
  if(isNaN(imeKorisnika) && isNaN(adresaKorisnika)){
    priceParagraf.innerHTML = `Book Price ${priceParagraf.value}$`
    paragrafZaIspisOrderDetails.innerHTML = 'Order details:';
    paragrafZaIspisIme.innerHTML=`Your Name: ${imeKorisnika}`
    paragrafZaIspisAdrese.innerHTML=`Your address: ${adresaKorisnika}`
    paragrafZaIspisTotalOrder.innerHTML=`Your total order: ${priceParagraf.value}$`
  }else{
    alert("Unosi ne smeju biti numericke vrednosti ili prazna polja");
     reset();
  }
for(let i = 0 ; i<checkBoxovi.length ; i++){
  
if(checkBoxovi[i].checked){
  zbirVrednostiCheckBoxova =parseInt(zbirVrednostiCheckBoxova) + parseInt(checkBoxovi[i].value)
}

}
priceParagraf.innerHTML = `Book Price ${zbirVrednostiCheckBoxova + priceParagraf.value}$`
paragrafZaIspisTotalOrder.innerHTML=`Your total order: ${zbirVrednostiCheckBoxova + priceParagraf.value}$`
});


// priceParagraf.innerHTML = `Book Price ${parseInt(checkBoxovi[0].value) + priceParagraf.value}$`
// paragrafZaIspisTotalOrder.innerHTML=`Your total order: ${parseInt(checkBoxovi[0].value) + priceParagraf.value}$`
// }if(checkBoxovi[1].checked){
// priceParagraf.innerHTML = `Book Price ${parseInt(checkBoxovi[1].value) + priceParagraf.value}$`
// paragrafZaIspisTotalOrder.innerHTML=`Your total order: ${parseInt(checkBoxovi[1].value) + priceParagraf.value}$`
// }if(checkBoxovi[2].checked){
// priceParagraf.innerHTML = `Book Price ${parseInt(checkBoxovi[2].value) + priceParagraf.value}$`
// paragrafZaIspisTotalOrder.innerHTML=`Your total order: ${parseInt(checkBoxovi[2].value) + priceParagraf.value}$`
// }if(checkBoxovi[0].checked && checkBoxovi[1].checked){
// priceParagraf.innerHTML = `Book Price ${parseInt(checkBoxovi[0].value) + parseInt(checkBoxovi[1].value) + priceParagraf.value}$`
// paragrafZaIspisTotalOrder.innerHTML=`Your total order: ${parseInt(checkBoxovi[0].value) + parseInt(checkBoxovi[1].value) + priceParagraf.value}$`
// }if(checkBoxovi[0].checked && checkBoxovi[2].checked){
// priceParagraf.innerHTML = `Book Price ${parseInt(checkBoxovi[0].value) + parseInt(checkBoxovi[2].value) + priceParagraf.value}$`
// paragrafZaIspisTotalOrder.innerHTML=`Your total order: ${parseInt(checkBoxovi[0].value) + parseInt(checkBoxovi[2].value) + priceParagraf.value}$`
// }if(checkBoxovi[1].checked && checkBoxovi[2].checked){
// priceParagraf.innerHTML = `Book Price ${parseInt(checkBoxovi[1].value) + parseInt(checkBoxovi[2].value) + priceParagraf.value}$`
// paragrafZaIspisTotalOrder.innerHTML=`Your total order: ${parseInt(checkBoxovi[1].value) + parseInt(checkBoxovi[2].value) + priceParagraf.value}$`
// }if(checkBoxovi[0].checked && checkBoxovi[1].checked && checkBoxovi[2].checked){
// priceParagraf.innerHTML = `Book Price ${parseInt(checkBoxovi[0].value) + parseInt(checkBoxovi[1].value) + parseInt(checkBoxovi[2].value) + priceParagraf.value}$`
// paragrafZaIspisTotalOrder.innerHTML=`Your total order: ${parseInt(checkBoxovi[0].value) + parseInt(checkBoxovi[1].value) + parseInt(checkBoxovi[2].value) + priceParagraf.value}$`
// }
     

//kolko god checkboxova da ima da mogu dinamicki da se dodaju