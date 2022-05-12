$(document).ready(function() {
    var usuario = localStorage.getItem("usuario");
    usuario = JSON.parse(usuario);
    console.log(usuario);
    $('#nombreUsuario').html(usuario.nombre);

});