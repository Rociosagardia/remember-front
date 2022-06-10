$(document).ready(function() {
    var medicamento = localStorage.getItem("medicamento");
    medicamento = JSON.parse(medicamento);
    console.log(medicamento);
    $('#nombremedicamento').html(medicamento.nombre)
    $('#dosismedicamento').html(medicamento.dosis)
});