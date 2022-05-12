$(document).ready(function(){
    $('#iniciarSesion').on('click', function(e) {
        e.preventDefault();
        var email=$("#email").val();
        console.log(email);

        var contraseña=$("#contraseña").val();
        console.log(contraseña);

        var settings = {
            "url": "http://localhost:3000/usuarios/login",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "email": email,
              "contraseña": contraseña
            }),
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response)
            localStorage.setItem("usuario", JSON.stringify(response));

            alert("Login correcto")
            window.location="usuarioLogueado.html"
          }).fail(function(){
              alert("correo o contraseña invalida")
          })
        

    })

})