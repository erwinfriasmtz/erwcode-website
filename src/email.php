<?php
  header("Content-Type:text/html; charset=UTF-8");
  $para = 'contacto@erwcode.com';
  $titulo = '🎯 Solicito Información de ErwCode';

  $cabeceras = 'MIME-Version: 1.0' . "\r\n";
  $cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  $cabeceras .= 'From: '.$_POST["contactEmail"];


  $mensaje =
      '<html>'.
          '<head>
              <title>Formulario de Contacto en PWA</title>
          </head>'.
          '<body>
            <p>Hola ErwCode Technologies,</p>
            <p>Mi nombre es <strong>'.$_POST["contactName"].'</strong> de la empresa <strong>'.$_POST["contactCompany"].'</strong>, les envío un cordial saludo y les comento que estoy interesado(a) en <strong>'.$_POST["service"].'</strong></p>'.
            '<p>A continuación les proporciono mis datos de contacto:</p>'.
            '<p>Email: <strong>'.$_POST["contactEmail"].'</strong></p>'.
            '<p>Teléfono: <strong>'.$_POST["contactPhone"].'</strong></p>'.
            '<p>Anexo la siguiente información: '.$_POST["contactMessage"].'</p>'.
            '<p>Agradezco la disponibilidad y quedo en espera su pronta respuesta.</p>'.
        '</body>'.
      '</html>';


  if (mail($para, $titulo, $mensaje, $cabeceras)){
      echo json_encode("Correo enviado, muchas gracias por contactarnos.");
  }else{
      echo json_encode('Falló el envio');
  }
?>
