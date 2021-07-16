$(function () {
  $("#step-1-submit").click(function () {
    $("#form-step1").addClass("d-none");
    $("#form-step2").removeClass("d-none");
  });

  $("#step-2-submit").click(function () {
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
