this.logueado = false;

$("#entrar").click(function() {
	if ($("#usuario").val() == "VICTOR" && $("#Contraseña").val() == "123") {
		logueado = true;
		if (logueado == true) {
			Swal.fire('Bienvenidio');
			{
				window.location = "./pages/galeria.html" 
			}
		}

	}else{
		Swal.fire('Usuario o contraseña invalidos. Favor intentelo de nuevo');
	}
});

window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});