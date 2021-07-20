<?php
$contact = json_decode($_POST["contact"], true);

$lang = $_GET["lang"];

$body = "";
$subject="";

try {
   

if ($lang == "ES")
{
    
    $subject="TransLogistica: Formulario de contacto";

    $body .= "<b>Nombre y Apellido: </b>" . $contact["apellido"] . "<br/>";
    $body .= "<b>Correo Electrónico: </b>" . $contact["email"] . "<br/>";
    $body .= "<b>Asunto: </b>" . $contact["asunto"] . "<br/>";
    $body .= "<b>Mensaje: </b>" . $contact["message"] . "<br/>";

}


$to = 'mehdi.marouani.developer@gmail.com';
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

mail($to, $subject, $body, $headers);

return http_response_code(200);

} catch (Exception $e) {
    return http_response_code(400);
}

?>
