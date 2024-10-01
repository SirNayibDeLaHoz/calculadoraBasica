// Funciones de flecha para las operaciones
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'División por 0 no permitida';

// Funcion para manejar el calculo
const calcular = (operacion, num1, num2) => {
    switch (operacion) {
        case 'suma':
            return sumar(num1, num2);
        case 'resta':
            return restar(num1, num2);
        case 'multiplicación':
            return multiplicar(num1, num2);
        case 'división':
            return dividir(num1, num2);
        default:
            return 'Operación no válida';
    }
};

// Evento para el formulario
document.getElementById('calculadoraForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operacion').value;

    // Calcular el resultado
    const resultado = calcular(operacion, num1, num2);

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});