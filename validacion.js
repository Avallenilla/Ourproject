var formulario = document.getElementsByName('formulario')[0],
elementos = formulario.elements,
boton = document.getElementById('btn');

var validarNombre = function(e){
if (formulario.nombre.value == 0){
    alert("Complete el nombre");
    e.preventDefault();

}
};
var validarApellido = function(e){
    if (formulario.apellido.value == 0){
        alert("Complete el apellido");
        e.preventDefault();
    
    }
    };
var validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Complete el email");
            e.preventDefault();
        
        }
        };
var validarMensaje = function(e){
            if (formulario.mensaje.value == 0){
                alert("Complete el campo mensaje");
                e.preventDefault();
            
            }
            };
                       
var validar = function(e){
validarNombre(e);
validarApellido(e);
validarEmail(e);
validarMensaje(e);
};

formulario.addEventListener("submit", validar);
