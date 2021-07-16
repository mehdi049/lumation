$(function () {
  $("#step-1-submit").click(function () {
    $("#form-step1").addClass("d-none");
    $("#form-step2").removeClass("d-none");
  });

  $("#step-2-submit").click(function () {
    /** step 1 */
    let apellido = $("#apellido").val();
    let email = $("#email").val();
    let telephono = $("#telephono").val();
    let empresa = $("#empresa").val();

    /** step 2 */
    let cotizarOption = $("input[name=cotizar-option]:checked").val();
    let origen = $("#origen").val();
    let destino = $("#destino").val();

    /** step 2-1 */
    let maritimoOption = $("input[name=maritimo-option]:checked").val();

    /** step 2-1-1 (LCL) */
    let marítimoPesoTotalLcl = $("#marítimo-peso-total-lcl").val();
    let marítimoPesoLcl = $("#marítimo-peso-lcl").val();
    let marítimoVolumenLcl = $("#marítimo-volumen-lcl").val();
    let marítimoCantidadLcl = $("#marítimo-cantidad-lcl").val();
    let marítimoLargoLcl = $("#marítimo-largo-lcl").val();
    let marítimoAnchoLcl = $("#marítimo-ancho-lcl").val();
    let marítimoAltoLcl = $("#marítimo-alto-lcl").val();
    let marítimoTipoDeProductoLcl = $("#marítimo-tipo-de-producto-lcl").val();
    let marítimoTemperaturaLcl = $("#marítimo-temperatura-lcl").val();

    /** step 2-1-2 (FCL) */
    let marítimoPesoTotalFcl = $("#marítimo-peso-total-fcl").val();
    let marítimoPesoFcl = $("#marítimo-peso-fcl").val();
    let marítimoTamañoFcl = $("#marítimo-tamaño-fcl").val();
    let marítimoCargaPeligrosaFcl = $("#marítimo-carga-peligrosa-fcl").val();
    let marítimoCargaRefrigeradaFcl = $(
      "#marítimo-carga-refrigerada-fcl"
    ).val();
    let marítimoTemperaturaFcl = $("#marítimo-temperatura-fcl").val();

    /** step 2-2 */
    let aéreoPesoTotal = $("#aéreo-peso-total").val();
    let aéreoPeso = $("#aéreo-peso").val();
    let aéreoLargo = $("#aéreo-largo").val();
    let aéreoAncho = $("#aéreo-ancho").val();
    let aéreoAlto = $("#aéreo-alto").val();
    let aéreoVolumen = $("#aéreo-volumen").val();
    let aéreoCantidad = $("#aéreo-cantidad").val();
    let aéreoCargaPeligrosa = $("#aéreo-carga-peligrosa").val();
    let aéreoCargaRefrigerada = $("#aéreo-carga-refrigerada").val();
    let aéreoTemperatura = $("#aéreo-temperatura").val();

    /** step 2-3 */
    let terrestreOption = $("input[name=terrestre-option]:checked").val();

    /** step 2-3-1 (LTL) */
    let terrestrePesoTotalLtl = $("#terrestre-peso-total-ltl").val();
    let terrestrePesoLtl = $("#terrestre-peso-ltl").val();
    let terrestreVolumenLtl = $("#terrestre-volumen-ltl").val();
    let terrestreCantidadLtl = $("#terrestre-cantidad-ltl").val();
    let terrestreLargoLtl = $("#terrestre-largo-ltl").val();
    let terrestreAnchoLtl = $("#terrestre-ancho-ltl").val();
    let terrestreAltoLtl = $("#terrestre-alto-ltl").val();

    /** step 2-3-2 (FTL) */
    let terrestrePesoTotalFtl = $("#terrestre-peso-total-ftl").val();
    let terrestrePesoFtl = $("#terrestre-peso-ftl").val();
    let terrestreCargaPeligrosaFtl = $("#terrestre-carga-peligrosa-ftl").val();
    let terrestreCantidadFtl = $("#terrestre-cantidad-ftl").val();
    let terrestreLargoFtl = $("#terrestre-largo-ftl").val();
    let terrestreAnchoFtl = $("#terrestre-ancho-ftl").val();
    let terrestreAltoFtl = $("#terrestre-alto-ftl").val();
    let terrestreTemperaturaFtl = $("#terrestre-temperatura-ftl").val();
    let terrestreTamañoFtl = $("#terrestre-tamaño-ftl").val();

    /** step 2-4 */
    let aduanaIncoterm = $("#aduana-incoterm").val();
    let aduanaMercancía = $("#aduana-mercancía").val();
    let aduanaFactura = $("#aduana-factura").val();

    /** step 2-5 */
    let seguroCIF = $("#seguro-CIF").val();

    let lang = $("#lang").val();

    console.log("Step 1:");
    console.log("Nombre y Apellido: " + apellido);
    console.log("Correo Electrónico: " + email);
    console.log("Número de Teléfono: " + telephono);
    console.log("Nombre de empresa: " + empresa);

    console.log("Step 2:");
    console.log("Cotizar option: " + cotizarOption);
    console.log("Origen: " + origen);
    console.log("Destino: " + destino);

    console.log("Step 2-1:");
    console.log("Maritimo option: " + maritimoOption);

    console.log("Step 2-1-1:");
    console.log("(LCL) Peso total: " + marítimoPesoTotalLcl);
    console.log("(LCL) Peso: " + marítimoPesoLcl);
    console.log("(LCL) Volumen (metros cúbicos): " + marítimoVolumenLcl);
    console.log("(LCL) Cantidad de paquetes: " + marítimoCantidadLcl);
    console.log("(LCL) Largo: " + marítimoLargoLcl);
    console.log("(LCL) Ancho: " + marítimoAnchoLcl);
    console.log("(LCL) Alto: " + marítimoAltoLcl);
    console.log("(LCL) Tipo de producto: " + marítimoTipoDeProductoLcl);
    console.log("(LCL) Temperatura: " + marítimoTemperaturaLcl);

    console.log("Step 2-1-2:");
    console.log("(FCL) Peso total: " + marítimoPesoTotalFcl);
    console.log("(FCL) Peso: " + marítimoPesoFcl);
    console.log("(FCL) Tamaño de equipo: " + marítimoTamañoFcl);
    console.log("(FCL) Carga peligrosa: " + marítimoCargaPeligrosaFcl);
    console.log("(FCL) Carga refrigerada: " + marítimoCargaRefrigeradaFcl);
    console.log("(FCL) Temperatura: " + marítimoTemperaturaFcl);

    console.log("Step 2-2:");
    console.log("Peso total: " + aéreoPesoTotal);
    console.log("Peso: " + aéreoPeso);
    console.log("Largo: " + aéreoLargo);
    console.log("Ancho: " + aéreoAncho);
    console.log("Alto: " + aéreoAlto);
    console.log("Volumen (metros cúbicos): " + aéreoVolumen);
    console.log("Cantidad de paquetes: " + aéreoCantidad);
    console.log("Carga peligrosa: " + aéreoCargaPeligrosa);
    console.log("Carga refrigerada: " + aéreoCargaRefrigerada);
    console.log("Temperatura: " + aéreoTemperatura);

    console.log("Step 2-3:");
    console.log("Terrestre option: " + terrestreOption);

    console.log("Step 2-3-1:");
    console.log("(LTL) Peso total: " + terrestrePesoTotalLtl);
    console.log("(LTL) Peso: " + terrestrePesoLtl);
    console.log("(LTL) Volumen (metros cúbicos): " + terrestreVolumenLtl);
    console.log("(LTL) Cantidad de paquetes: " + terrestreCantidadLtl);
    console.log("(LTL) Largo: " + terrestreLargoLtl);
    console.log("(LTL) Ancho: " + terrestreAnchoLtl);
    console.log("(LTL) Alto: " + terrestreAltoLtl);

    console.log("Step 2-3-2:");
    console.log("(FTL) Peso total: " + terrestrePesoTotalFtl);
    console.log("(FTL) Peso: " + terrestrePesoFtl);
    console.log("(FTL) Carga peligrosa: " + terrestreCargaPeligrosaFtl);
    console.log("(FTL) Cantidad de paquetes: " + terrestreCantidadFtl);
    console.log("(FTL) Largo: " + terrestreLargoFtl);
    console.log("(FTL) Ancho: " + terrestreAnchoFtl);
    console.log("(FTL) Alto: " + terrestreAltoFtl);
    console.log("(FTL) Temperatura: " + terrestreTemperaturaFtl);
    console.log("(FTL) Tamaño de equipo: " + terrestreTamañoFtl);

    console.log("Step 2-4:");
    console.log("Incoterm: " + aduanaIncoterm);
    console.log("Mercancía: " + aduanaMercancía);
    console.log("Valor de la factura: " + aduanaFactura);

    console.log("Step 2-5:");
    console.log("Valor CIF: " + seguroCIF);

    console.log("LANG:");
    console.log("Language: " + lang);

    $("#form-step1").addClass("d-none");
    $("#form-step2").addClass("d-none");
    $("#form-step3").removeClass("d-none");
  });

  $("#step-3-submit").click(function () {
    setTimeout(() => {
      $("#form-step1").removeClass("d-none");
      $("#form-step3").addClass("d-none");
    }, 1500);
  });

  $("input[name=cotizar-option]").change(function () {
    let value = $(this).val();
    switch (value) {
      case "marítimo":
        $(
          "#form-step2-2, #form-step2-3, #form-step2-4, #form-step2-5"
        ).addClass("d-none");
        $("#form-step2-1").removeClass("d-none");
        break;
      case "aéreo":
        $(
          "#form-step2-1, #form-step2-3, #form-step2-4, #form-step2-5"
        ).addClass("d-none");
        $("#form-step2-2").removeClass("d-none");
        break;
      case "terrestre":
        $(
          "#form-step2-1, #form-step2-2, #form-step2-4, #form-step2-5"
        ).addClass("d-none");
        $("#form-step2-3").removeClass("d-none");
        break;
      case "aduana":
        $(
          "#form-step2-1, #form-step2-2, #form-step2-3, #form-step2-5"
        ).addClass("d-none");
        $("#form-step2-4").removeClass("d-none");
        break;
      case "seguro":
        $(
          "#form-step2-1, #form-step2-2, #form-step2-3, #form-step2-4"
        ).addClass("d-none");
        $("#form-step2-5").removeClass("d-none");
        break;
    }
  });

  $("input[name=maritimo-option]").change(function () {
    let value = $(this).val();
    switch (value) {
      case "LCL":
        $("#form-step2-1-2").addClass("d-none");
        $("#form-step2-1-1").removeClass("d-none");
        break;
      case "FCL":
        $("#form-step2-1-1").addClass("d-none");
        $("#form-step2-1-2").removeClass("d-none");
        break;
    }
  });

  $("input[name=terrestre-option]").change(function () {
    let value = $(this).val();
    switch (value) {
      case "LTL":
        $("#form-step2-3-2").addClass("d-none");
        $("#form-step2-3-1").removeClass("d-none");
        break;
      case "FTL":
        $("#form-step2-3-1").addClass("d-none");
        $("#form-step2-3-2").removeClass("d-none");
        break;
    }
  });
});
