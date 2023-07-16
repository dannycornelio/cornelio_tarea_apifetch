const boton = document.getElementById('btnGen');
const texto = document.getElementById('texto');


async function getData(mensaje){

  const respuesta = await fetch(`phpConsulta.php?texto=${mensaje}`);
    const config = {
  // aqui se establece el metodo que utilizaremos para traer los datos
      method: 'GET' 
        };
  let data = await respuesta.json();
//aqui validamos si el metodo utilizado es diferente de GET
//de ser GET mostrara la Data
  if (config.method.toUpperCase() === 'GET') {
    if (data.resultado === true) {
      mostrarData(data);
//si la Data esta vacia enviara esta alerta
    } else {
      alert("Error en la consulta, intente nuevamente.");
    }
// si el metodo no es GET enviara esta alerta    
  } else {
    alert("El método de búsqueda no es GET.");
  }
}

//aqui almacenamos las variables 
function mostrarData(data){

  const base64 = document.getElementById('base64');
  const md5 = document.getElementById('md5');
  const sha256 = document.getElementById('sha256');
  
  //aqui llevalos la data a las variables
  base64.innerHTML = data.base64;
  md5.innerHTML = data.md5;
  sha256.innerHTML = data.sha256

}

//cuando se orpima el boton se cargara el valor del mensaje 
boton.addEventListener('click', function() {

  getData(texto.value);

});

