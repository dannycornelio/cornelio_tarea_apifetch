const formulario = document.getElementById('formulario');
const botonBuscar = document.getElementById('botonBuscar');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  fetch('phpConsulta.php', {
    method: 'get',
    body: new FormData(formulario)
  })
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error('Error en la consulta');
    })
    .then(data => {
      const metodo = '<?php echo $metodo; ?>';
      const respuesta = `${data}\n\nEl método utilizado es: ${metodo}`;
      alert(respuesta);
      console.log(respuesta);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});