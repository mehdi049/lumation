<?php
$step1 = json_decode($_POST["step1"], true);
$step2 = json_decode($_POST["step2"], true);
$step2_1 = json_decode($_POST["step2_1"], true);
$step2_2 = json_decode($_POST["step2_2"], true);
$step2_3 = json_decode($_POST["step2_3"], true);
$step2_4 = json_decode($_POST["step2_4"], true);
$step2_5 = json_decode($_POST["step2_5"], true);

$lang = $_GET["lang"];

$body = "";
$subject="";

try {

    
if ($lang == "ES")
{
    
    $subject="TransLogistica: Formulario de cotización";

    /** step 1 */
    $body .= "<b>Nombre y Apellido: </b>" . $step1["apellido"] . "<br/>";
    $body .= "<b>Correo Electrónico: </b>" . $step1["email"] . "<br/>";
    $body .= "<b>Número de Teléfono: </b>" . $step1["telephono"] . "<br/>";
    $body .= "<b>Nombre de empresa: </b>" . $step1["empresa"] . "<br/><br/>";

    /** step 2 */
    $cotizarOption = $step2["cotizarOption"];
    $body .= "<b>Opción de cotización: </b>" . $cotizarOption . "<br/>";
    $body .= "<b>Origen: </b>" . $step2["origen"] . "<br/>";
    $body .= "<b>Destino: </b>" . $step2["destino"] . "<br/><br/>";

    /** step 2-1 */
    if ($cotizarOption == "marítimo")
    {

        $body .= "<b>Opción de marítimo: </b>" . $step2_1["maritimoOption"] . "<br/>";

        /** step 2-1-1 */
        if ($step2_1["maritimoOption"] == "LCL")
        {
            $body .= "<b>Peso total: </b>" . $step2_1["lcl"]["marítimoPesoTotalLcl"] . "<br/>";
            $body .= "<b>Peso: </b>" . $step2_1["lcl"]["marítimoPesoLcl"] . "<br/>";
            $body .= "<b>Volumen (metros cúbicos): </b>" . $step2_1["lcl"]["marítimoVolumenLcl"] . "<br/>";
            $body .= "<b>Cantidad de paquetes: </b>" . $step2_1["lcl"]["marítimoCantidadLcl"] . "<br/>";
            $body .= "<b>Largo: </b>" . $step2_1["lcl"]["marítimoLargoLcl"] . "<br/>";
            $body .= "<b>Ancho: </b>" . $step2_1["lcl"]["marítimoAnchoLcl"] . "<br/>";
            $body .= "<b>Alto: </b>" . $step2_1["lcl"]["marítimoAltoLcl"] . "<br/>";
            $body .= "<b>Tipo de producto: </b>" . $step2_1["lcl"]["marítimoTipoDeProductoLcl"] . "<br/>";
            $body .= "<b>Temperatura: </b>" . $step2_1["lcl"]["marítimoTemperaturaLcl"] . "<br/><br/>";
        }

        /** step 2-1-2 */
        if ($step2_1["maritimoOption"] == "FCL")
        {
            $body .= "<b>Peso total: </b>" . $step2_1["fcl"]["marítimoPesoTotalFcl"] . "<br/>";
            $body .= "<b>Peso: </b>" . $step2_1["fcl"]["marítimoPesoFcl"] . "<br/>";
            $body .= "<b>Tamaño de equipo: </b>" . $step2_1["fcl"]["marítimoTamañoFcl"] . "<br/>";
            $body .= "<b>Carga peligrosa: </b>" . $step2_1["fcl"]["marítimoCargaPeligrosaFcl"] . "<br/>";
            $body .= "<b>Carga refrigerada: </b>" . $step2_1["fcl"]["marítimoCargaRefrigeradaFcl"] . "<br/>";
            $body .= "<b>Temperatura: </b>" . $step2_1["fcl"]["marítimoTemperaturaFcl"] . "<br/><br/>";
        }

    }

    /** step 2-2 */
    if ($cotizarOption == "aéreo")
    {
        $body .= "<b>Peso total: </b>" . $step2_2["aéreoPesoTotal"] . "<br/>";
        $body .= "<b>Peso: </b>" . $step2_2["aéreoPeso"] . "<br/>";
        $body .= "<b>Largo: </b>" . $step2_2["aéreoLargo"] . "<br/>";
        $body .= "<b>Ancho: </b>" . $step2_2["aéreoAncho"] . "<br/>";
        $body .= "<b>Alto: </b>" . $step2_2["aéreoAlto"] . "<br/>";
        $body .= "<b>Volumen (metros cúbicos): </b>" . $step2_2["aéreoVolumen"] . "<br/>";
        $body .= "<b>Cantidad de paquetes: </b>" . $step2_2["aéreoCantidad"] . "<br/>";
        $body .= "<b>Carga peligrosa: </b>" . $step2_2["aéreoCargaPeligrosa"] . "<br/>";
        $body .= "<b>Carga refrigerada: </b>" . $step2_2["aéreoCargaRefrigerada"] . "<br/>";
        $body .= "<b>Temperatura: </b>" . $step2_2["aéreoTemperatura"] . "<br/><br/>";

    }

    /** step 2-3 */
    if ($cotizarOption == "terrestre")
    {

        $body .= "<b>Opción de terrestre: </b>" . $step2_3["terrestreOption"] . "<br/>";

        /** step 2-3-1 */
        if ($step2_3["terrestreOption"] == "LTL")
        {
            $body .= "<b>Peso total: </b>" . $step2_3["ltl"]["terrestrePesoTotalLtl"] . "<br/>";
            $body .= "<b>Peso: </b>" . $step2_3["ltl"]["terrestrePesoLtl"] . "<br/>";
            $body .= "<b>Volumen (metros cúbicos): </b>" . $step2_3["ltl"]["terrestreVolumenLtl"] . "<br/>";
            $body .= "<b>Cantidad de paquetes: </b>" . $step2_3["ltl"]["terrestreCantidadLtl"] . "<br/>";
            $body .= "<b>Largo: </b>" . $step2_3["ltl"]["terrestreLargoLtl"] . "<br/>";
            $body .= "<b>Ancho: </b>" . $step2_3["ltl"]["terrestreAnchoLtl"] . "<br/>";
            $body .= "<b>Alto: </b>" . $step2_3["ltl"]["terrestreAltoLtl"] . "<br/><br/>";
        }

        /** step 2-3-2 */
        if ($step2_3["terrestreOption"] == "FTL")
        {
            $body .= "<b>Peso total: </b>" . $step2_3["ftl"]["terrestrePesoTotalFtl"] . "<br/>";
            $body .= "<b>Peso: </b>" . $step2_3["ftl"]["terrestrePesoFtl"] . "<br/>";
            $body .= "<b>Volumen (metros cúbicos): </b>" . $step2_3["ftl"]["terrestreCargaPeligrosaFtl"] . "<br/>";
            $body .= "<b>Cantidad de paquetes: </b>" . $step2_3["ftl"]["terrestreCantidadFtl"] . "<br/>";
            $body .= "<b>Largo: </b>" . $step2_3["ftl"]["terrestreLargoFtl"] . "<br/>";
            $body .= "<b>Ancho: </b>" . $step2_3["ftl"]["terrestreAnchoFtl"] . "<br/>";
            $body .= "<b>Alto: </b>" . $step2_3["ftl"]["terrestreAltoFtl"] . "<br/>";
            $body .= "<b>Temperatura: </b>" . $step2_3["ftl"]["terrestreTemperaturaFtl"] . "<br/>";
            $body .= "<b>Tamaño de equipo: </b>" . $step2_3["ftl"]["terrestreTamañoFtl"] . "<br/><br/>";
        }

    }

    /** step 2-4 */
    if ($cotizarOption == "aduana")
    {
        $body .= "<b>Incoterm: </b>" . $step2_4["aduanaIncoterm"] . "<br/>";
        $body .= "<b>Mercancía: </b>" . $step2_4["aduanaMercancía"] . "<br/>";
        $body .= "<b>Valor de la factura: </b>" . $step2_4["aduanaFactura"] . "<br/><br/>";
    }

    /** step 2-5 */
    if ($cotizarOption == "seguro")
    {
        $body .= "<b>Valor CIF: </b>" . $step2_5["seguroCIF"] . "<br/>";
    }

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
