$(document).ready(function() {
    $('#ingresarMedicamento').on('click', function(e) {
        e.preventDefault();
        if (!$("#registroMedicamento")[0].checkValidity()) {
          $("#registroMedicamento")[0].reportValidity();
          return;
        }
        var nombre=$("#nombre").val();
        console.log(nombre);

        var dosis=$("#dosis").val();
        console.log(dosis);

        var horario=$("#horario").val();
        console.log(horario);

        var fechaInicio=$("#fechaInicio").val();
        console.log(fechaInicio);

        var fechaTermino=$("#fechaTermino").val();
        console.log(fechaTermino);

        var settings = {
            "url": "http://localhost:3000/medicamento/7ac08ebc-3b03-4846-a7d2-48fa3eda8cf1",//no pillo la ruta:C
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "nombre": nombre,
              "dosis": dosis,
              "horario": horario,
              "fecha_inicio": fechaInicio,
              "fecha_termino": fechaTermino
            }),
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            alert("Medicamento ingresado correctamente")
            window.location="listadoMedicamentos.html"
          });
    }); 
});