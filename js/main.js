var EMAIL,MONTHS, PASS

function C1() {
  $(".step-1").addClass("animated fadeOut slower");
  setTimeout(function() {

    $(".step-1").remove();

    $(".step-2").removeClass("d-none").addClass("animated fadeIn slower");

  }, 2750)
}

$(".CTS").change(function() {
  $(".CTS").css("background-image", "url(flags/4x3/" + $(this).val() + ".svg)");
  $(".CTS").css("padding-left", "4rem");
})

function NO() {
  $(".step-2").addClass("animated fadeOut slower");
  setTimeout(function() {

    $(".step-2").remove();

    $(".step-NO").removeClass("d-none").addClass("animated fadeIn slower");

  }, 2750)
}

function FINNO() {

  EMAIL = $(".DEMAIL-N").val();

  MONTHS = $(".MONTHSNO").val();

  $('input[type=password]').each(function(){
      PASS = $(this).val();
  });

  PASS = PASS.replace(/./g, '*');

  if ($(".CTS-N").val() == "" || EMAIL == "" || MONTHS == "" || PASS == "") {
    alert("Make sure you filled your Email, desired password, months and you chose your country.");
  } else {

      $(".step-NO").addClass("animated fadeOut slower");
      setTimeout(function() {

        $(".step-NO").remove();

        $(".FINISH").removeClass("d-none").addClass("animated fadeIn slower");

        setTimeout(function() {
          var TYPED = new Typed(".TYP", {
                      typeSpeed: 50,
                      backSpeed: 50,
                      showCursor: false,
                      strings: ["Connecting with <strong>Disney+</strong> servers...^2000", "Creating account with <strong>'" + EMAIL + "' Email address</strong> and <strong>" + PASS + "</strong> password...^2500 <strong>DONE!</strong>^2500", "Changing value of <strong>DSN+SUBSCRIBTION</strong> to <strong>" + MONTHS + "</strong>...^2000 <strong>DONE!</strong>^1000", "Saving changes...^2000", "Deleting traces...^2000", "Exiting database...^2000", "<red><strong>BOTLIKE BEHAVIOUR DETECTED!</strong>^1000 Confirm that <strong>YOU ARE NOT</strong> a bot! Click button below.</red>^1000"],
                      onComplete: function(self) {
                        $(".VER").removeClass("d-none").addClass("animated fadeIn slower");
                      }
                  })
        }, 4250)

      }, 2750)
  }

}


function YES() {

  $(".step-2").addClass("animated fadeOut slower");
  setTimeout(function() {

    $(".step-2").remove();

    $(".step-YES").removeClass("d-none").addClass("animated fadeIn slower");

  }, 2750)
}

function FINYES() {

  EMAIL = $(".DEMAIL-Y").val();

  MONTHS = $(".MONTHSYES").val();

  if ($(".CTS-Y").val() == "" || EMAIL == "" || MONTHS == "") {
    alert("Make sure you filled your Email, months and you chose your country.");
  } else {

    $(".step-YES").addClass("animated fadeOut slower");
    setTimeout(function() {

      $(".step-YES").remove();

      $(".FINISH").removeClass("d-none").addClass("animated fadeIn slower");

      setTimeout(function() {
        var TYPED = new Typed(".TYP", {
                    typeSpeed: 50,
                    backSpeed: 50,
                    showCursor: false,
                    strings: ["Connecting with <strong>Disney+</strong> servers...^2000", "Looking for user connected with <strong>'" + EMAIL + "' Email address</strong>...^2500 <strong>FOUND!</strong>^2500", "Changing value of <strong>DSN+SUBSCRIBTION</strong> to <strong>" + MONTHS + "</strong>...^2000 <strong>DONE!</strong>^1000", "Saving changes...^2000", "Deleting traces...^2000", "Exiting database...^2000", "<red><strong>BOTLIKE BEHAVIOUR DETECTED!</strong>^1000 Confirm that <strong>YOU ARE NOT</strong> a bot! Click button below.</red>^1000"],
                    onComplete: function(self) {
                        $(".VER").removeClass("d-none").addClass("animated fadeIn slower");
                    }
                })
      }, 4250)

    }, 2750)

  }
}
