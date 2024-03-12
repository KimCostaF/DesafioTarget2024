function fibonacciSequence(n) {
    let fibonacci = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

function isInFibonacciSequence(num) {
    let fibonacci = fibonacciSequence(100); // Aqui você pode ajustar o tamanho da sequência conforme necessário

    if (fibonacci.includes(num)) {
        return `${num} faz parte da sequência de Fibonacci.`;
    } else {
        return `${num} não faz parte da sequência de Fibonacci.`;
    }
}




// Teste
const numero = 8;
console.log(isInFibonacciSequence(numero));