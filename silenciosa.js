var inputs= document.getElementsByClassName('input-formulario');
for (var i=0;i<inputs.length;i++){
  inputs[i].addEventListener('keyup',validacion);
}
function validacion(){
  if(this.value.length>=1){
    this.nextElementSibling.classList.add('fijar');
  }else{
    this.nextElementSibling.classList.remove('fijar');
  }
}
