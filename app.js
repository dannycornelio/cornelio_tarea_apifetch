const boton = document.getElementById('btnGen');
const texto = document.getElementById('texto');


async function getData(mensaje){

  const respuesta = await fetch(`phpConsulta.php?texto=${mensaje}`);

  var data = await respuesta.json();

  if(data.resultado == true){

    mostrarData(data);
    
  }else{
    alert("Error en la consulta, intente nuevamente.");
  }

}

function mostrarData(data){

  const base64 = document.getElementById('base64');
  const md5 = document.getElementById('md5');
  const sha256 = document.getElementById('sha256');

  base64.innerHTML = data.base64;
  md5.innerHTML = data.md5;
  sha256.innerHTML = data.sha256

}


boton.addEventListener('click', function() {

  getData(texto.value);

});