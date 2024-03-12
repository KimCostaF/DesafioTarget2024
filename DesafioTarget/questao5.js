function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

// Teste
const stringOriginal = "Olá, mundo!";
const stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida);