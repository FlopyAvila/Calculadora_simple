document.addEventListener('DOMContentLoaded', function() {
    const inputCalculadora = document.getElementById('calculadora');
    const botones = document.querySelectorAll('.btn');

    // Función para procesar la entrada, ya sea de botón o teclado
    function procesarEntrada(valor) {
        if (valor === '=') {
            try {
                inputCalculadora.value = eval(inputCalculadora.value); // Evaluar la expresión
            } catch {
                inputCalculadora.value = 'Error. Volver a intentar.'; 
            }
        } else {
            inputCalculadora.value += valor; 
        }
    }

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const valorBoton = this.value;
            procesarEntrada(valorBoton);
        });
    });

    document.getElementById('borrar_todo').addEventListener('click', function() {
        inputCalculadora.value = ''; 
    });

    document.getElementById('borrar_1').addEventListener('click', function() {
        inputCalculadora.value = inputCalculadora.value.slice(0, -1); 
    });

    document.addEventListener('keydown', function(event) {
        const teclasValidas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '%'];
        const teclaPresionada = event.key;

        if (teclasValidas.includes(teclaPresionada)) {
            procesarEntrada(teclaPresionada);
        } else if (teclaPresionada === 'Enter') {
            procesarEntrada('=');
        } else if (teclaPresionada === 'Backspace') {
            inputCalculadora.value = inputCalculadora.value.slice(0, -1); 
        } else if (teclaPresionada === 'Escape') {
            inputCalculadora.value = '';
        }
    });
});
