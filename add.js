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

}



