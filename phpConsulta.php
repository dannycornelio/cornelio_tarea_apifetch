<?php

try {
  $metodo = $_SERVER['REQUEST_METHOD'];
  $respuesta = array();

  if ($metodo === 'GET') {
    if (isset($_GET['texto']) && $_GET['texto'] != '') {
      $texto = $_GET['texto'];

      $respuesta['resultado'] = true;
      $respuesta['base64'] = base64_encode($texto);
      $respuesta['md5'] = md5($texto);
      $respuesta['sha256'] = hash('sha256', $texto);

      $res = json_encode($respuesta);
      print_r($res);
    } else {
      $respuesta['resultado'] = false;
      print_r(json_encode($respuesta));
    }
  } else {
    $respuesta['resultado'] = false;
    $respuesta['error'] = "No es un método GET";
    http_response_code(405);
    print_r(json_encode($respuesta));
  }
} catch (Exception $e) {
  echo "Error: " . $e->getMessage() . "<br>";
}
?>