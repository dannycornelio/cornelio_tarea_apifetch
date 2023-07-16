<?php

try {

  $metodo = $_SERVER['REQUEST_METHOD'];

  $respuesta = array();

  if ($metodo === 'GET') {
    
      if(isset($_GET['texto']) && $_GET['texto'] != ''){

        $texto = $_GET['texto'];

        $respuesta['resultado'] = true;
        $respuesta['base64'] = base64_encode($texto);
        $respuesta['md5'] = md5($texto);
        $respuesta['sha256'] = hash('sha256',$texto);

        $res = json_encode($respuesta);

        print_r($res);

      }else{
        //se envia si no existe la variable texto o el valor es vacio
        $respuesta['resultado'] = false;
        print_r(json_encode($respuesta));
      }

  } else {
    // Realiza acciones para otros métodos
    http_response_code(500);
    die();
  }
}catch(Exception $e){
  echo "Error: ".$e->getMessage()."<br>";
}
?>