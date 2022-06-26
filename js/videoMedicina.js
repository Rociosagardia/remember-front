$(document).ready(function () {
    var medicamento = localStorage.getItem("medicamento");
    medicamento = JSON.parse(medicamento);
    console.log(medicamento);
    $('#nombremedicamento').html(medicamento.nombre);
    $('#dosismedicamento').html(medicamento.dosis);

    var usuarioAdultoMayor = localStorage.getItem("usuarioAdultoMayor");
    usuarioAdultoMayor = JSON.parse(usuarioAdultoMayor);
    console.log(usuarioAdultoMayor);
  

    $('#aceptar').on('click', function (e) {
        e.preventDefault()
        console.log("enviando historial")
        var settings = {
            "url": "http://localhost:3000/medicamento/"+usuarioAdultoMayor.id+"/historial",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "nombre": medicamento.nombre
            }),
          };
      
          $.ajax(settings).done(function (response) {
            console.log(response);
            alert("Ingreso de historial ingresado correctamente")
            window.location = "adultoMayorLogueado.html"
           
          });
    })
});