function calcularMedia(nota1: number, nota2: number, nota3: number, nota4: number): number {
    const media = ((nota1 + nota2 + nota3 + nota4) / 4);
    return media;
}

const nota1 = 7.5;
const nota2 = 8.0;
const nota3 = 6.5;
const nota4 = 9.0;

const resultado = calcularMedia(nota1, nota2, nota3, nota4);
console.log(`A média é: ${resultado}`);