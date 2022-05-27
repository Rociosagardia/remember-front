
$(document).ready(function () {
  var usuarioAdultoMayor = localStorage.getItem("usuarioAdultoMayor");
  usuarioAdultoMayor = JSON.parse(usuarioAdultoMayor);
  console.log(usuarioAdultoMayor);
  $('#nombreUsuarioAdulto').html(usuarioAdultoMayor.nombre);

  var settings = {
    "url": "http://localhost:3000/medicamento/" + usuarioAdultoMayor.id,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response
      )

    var str = "";
    for (var i = 0; i < response.length; i++) {
      var nombre = response[i].nombre;

      // Example of rendering
      str += "<p class='titulo4 alinear-texto'> " + nombre + "</p>";
    }
    $("#medicamentos").html(str);


  })


  //get the closable setting value.
  var closable = alertify.alert().setting('closable');
  //grab the dialog instance using its parameter-less constructor then set multiple settings at once.
  alertify.alert()
    .setting({
      'startMaximized': true,
      'label': 'Agree',
      'message': 'Hora del medicamento ' + (closable ? ' ' : ' not ') + '',
      'onok': function () { alertify.success('Great'); },


    }).show();


})