const boton = window.document.querySelector('#Boton');
boton.addEventListener('click', ingresarDatos); 

function ingresarDatos(){
    const input1= window.document.querySelector('#email');
    const input2 = window.document.querySelector('#contraseña');
    const textoInput = input1.value;
    const textoInput2 = input2.value;    

    if (textoInput === 'ejemplo@gmail.com' && textoInput2 === '123456'){
        document.getElementById('mensaje').innerHTML = 'Iniciando sesión…';
        document.location.assign('../Layout/index.html');          
    }  
    else {
        
        document.getElementById("mensaje").innerHTML = "Nombre de usuario y/o contraseña incorrectos";
    }
    /*input1.value = '';
    input1.focus(); 
    input2.value = '';
    input2.focus(); */
    
}


