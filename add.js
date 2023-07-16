fetch('phpConsulta.php')
  .then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Error en la consulta');
  })
  .then(data => {
    console.log(data);
    // Hacer algo con la respuesta del archivo PHP
  })
  .catch(error => {
    console.error('Error:', error);
  });