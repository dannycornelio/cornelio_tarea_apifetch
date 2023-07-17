const boton = document.getElementById("btnGen");
const texto = document.getElementById("texto");

async function getData(mensaje) {
  const respuesta = await fetch(`phpConsulta.php?texto=${mensaje}`);
  const config = {
    // aquí se establece el método que utilizaremos para traer los datos
    method: "GET",
  };

  // Validación del método
  if (config.method.toUpperCase() !== "GET") {
    alert("El método de búsqueda no es GET.");
    return;
  }

  let data = await respuesta.json();

  // Validación de la data
  if (data.resultado === true) {
    mostrarData(data);
  } else {
    alert("Ingrese una consulta.");
  }
}

//aqui almacenamos las variables
function mostrarData(data) {
  const base64 = document.getElementById("base64");
  const md5 = document.getElementById("md5");
  const sha256 = document.getElementById("sha256");

  //aqui llevalos la data a las variables
  base64.innerHTML = data.base64;
  md5.innerHTML = data.md5;
  sha256.innerHTML = data.sha256;
}

//cuando se orpima el boton se cargara el valor del mensaje
boton.addEventListener("click", function () {
  getData(texto.value);
});
