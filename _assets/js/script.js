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

    let step1 = {
      apellido: apellido,
      email: email,
      telephono: telephono,
      empresa: empresa,
    };

    let step2 = {
      cotizarOption: cotizarOption,
      origen: origen,
      destino: destino,
    };

    let step2_1 = {
      maritimoOption: maritimoOption,
      lcl: {
        marítimoPesoTotalLcl: marítimoPesoTotalLcl,
        marítimoPesoLcl: marítimoPesoLcl,
        marítimoVolumenLcl: marítimoVolumenLcl,
        marítimoCantidadLcl: marítimoCantidadLcl,
        marítimoLargoLcl: marítimoLargoLcl,
        marítimoAnchoLcl: marítimoAnchoLcl,
        marítimoAltoLcl: marítimoAltoLcl,
        marítimoTipoDeProductoLcl: marítimoTipoDeProductoLcl,
        marítimoTemperaturaLcl: marítimoTemperaturaLcl,
      },
      fcl: {
        marítimoPesoTotalFcl: marítimoPesoTotalFcl,
        marítimoPesoFcl: marítimoPesoFcl,
        marítimoTamañoFcl: marítimoTamañoFcl,
        marítimoCargaPeligrosaFcl: marítimoCargaPeligrosaFcl,
        marítimoCargaRefrigeradaFcl: marítimoCargaRefrigeradaFcl,
        marítimoTemperaturaFcl: marítimoTemperaturaFcl,
      },
    };

    let step2_2 = {
      aéreoPesoTotal: aéreoPesoTotal,
      aéreoPeso: aéreoPeso,
      aéreoLargo: aéreoLargo,
      aéreoAncho: aéreoAncho,
      aéreoAlto: aéreoAlto,
      aéreoVolumen: aéreoVolumen,
      aéreoCantidad: aéreoCantidad,
      aéreoCargaPeligrosa: aéreoCargaPeligrosa,
      aéreoCargaRefrigerada: aéreoCargaRefrigerada,
      aéreoTemperatura: aéreoTemperatura,
    };

    let step2_3 = {
      terrestreOption: terrestreOption,
      ltl: {
        terrestrePesoTotalLtl: terrestrePesoTotalLtl,
        terrestrePesoLtl: terrestrePesoLtl,
        terrestreVolumenLtl: terrestreVolumenLtl,
        terrestreCantidadLtl: terrestreCantidadLtl,
        terrestreLargoLtl: terrestreLargoLtl,
        terrestreAnchoLtl: terrestreAnchoLtl,
        terrestreAltoLtl: terrestreAltoLtl,
      },
      ftl: {
        terrestrePesoTotalFtl: terrestrePesoTotalFtl,
        terrestrePesoFtl: terrestrePesoFtl,
        terrestreCargaPeligrosaFtl: terrestreCargaPeligrosaFtl,
        terrestreCantidadFtl: terrestreCantidadFtl,
        terrestreLargoFtl: terrestreLargoFtl,
        terrestreAnchoFtl: terrestreAnchoFtl,
        terrestreAltoFtl: terrestreAltoFtl,
        terrestreTemperaturaFtl: terrestreTemperaturaFtl,
        terrestreTamañoFtl: terrestreTamañoFtl,
      },
    };

    let step2_4 = {
      aduanaIncoterm: aduanaIncoterm,
      aduanaMercancía: aduanaMercancía,
      aduanaFactura: aduanaFactura,
    };

    let step2_5 = {
      seguroCIF: seguroCIF,
    };

    $("#form-error").addClass("d-none");

    $.ajax({
      url: "sendMail.php?lang=" + lang,
      method: "post",
      data: {
        step1: JSON.stringify(step1),
        step2: JSON.stringify(step2),
        step2_1: JSON.stringify(step2_1),
        step2_2: JSON.stringify(step2_2),
        step2_3: JSON.stringify(step2_3),
        step2_4: JSON.stringify(step2_4),
        step2_5: JSON.stringify(step2_5),
      },
      dataType: "json",
      complete: function (response) {
        if (response.status === 200) {
          $("#form-step1").addClass("d-none");
          $("#form-step2").addClass("d-none");
          $("#form-step3").removeClass("d-none");
        } else {
          $("#form-error").removeClass("d-none");
        }
      },
    });
  });

  $("#step-3-submit").click(function () {
    setTimeout(() => {
      $("#form-step1").removeClass("d-none");
      $("#form-step3").addClass("d-none");
    }, 1000);
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
