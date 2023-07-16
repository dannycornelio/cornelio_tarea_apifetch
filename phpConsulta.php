<?php
$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo === 'POST') {
  // Realiza acciones específicas para el método GET
  echo 'El método de búsqueda es GET';
} else {
  // Realiza acciones para otros métodos (POST, PUT, DELETE, etc.)
  echo 'El método de búsqueda no es GET';
}
?>
