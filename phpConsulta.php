<?php
$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo === 'GET') {
  // Realiza acciones específicas para el método GET
  echo 'El método de búsqueda es GET ';
} else {
  // Realiza acciones para otros métodos
  echo 'El método de búsqueda no es GET';
}
?>