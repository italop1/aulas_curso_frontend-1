function soma(){
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = a + b;
  //document.getElementById('demo').innerHTML = parseInt(a) + parseInt(b);
}

function subtrair() {
    var a = document.getElementById('valor01').value;
    var b = document.getElementById('valor02').value;
    document.getElementById('demo').innerHTML = parseInt(a) - parseInt(b);
}

function multiplicar() {
    var a = document.getElementById('valor01').value;
    var b = document.getElementById('valor02').value;
    document.getElementById('demo').innerHTML = parseInt(a) * parseInt(b);
}

function dividir() {
    var a = document.getElementById('valor01').value;
    var b = document.getElementById('valor02').value;
    document.getElementById('demo').innerHTML = parseInt(a) / parseInt(b);
}

function potenciacao() {
    var a = document.getElementById('valor01').value;
    var b = document.getElementById('valor02').value;
    document.getElementById('demo').innerHTML = parseInt(a) ** parseInt(b);
}