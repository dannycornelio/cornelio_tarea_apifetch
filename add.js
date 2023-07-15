// Obtener  los elementos del formulario y del botón
const formulario = document.querySelector('#formulario')
const botonConsulta = document.querySelector('#botonConsulta')

 // Función para realizar la consulta a la API
 const consultarApi = async (e) => {

// Evitar que se envíe el formulario por defecto
    e.preventDefault()

// Obtener la URL y el método del formulario
    const url = formulario.getAttribute('action')
    const config = {
        method: formulario.getAttribute('method')
    }

    //try catch
    try {
        const respuesta = await fetch(url, config);
        const data = await respuesta.text();
        alert(data);
        console.log('Método GET');
    } catch (error) {
        alert('Error en la consulta: ' + error);
    }

}

// Asignar el manejador de eventos al botón de consulta
    botonConsulta.addEventListener('click', consultarApi);


