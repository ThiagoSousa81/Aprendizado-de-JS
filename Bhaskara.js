// Pede ao usuário que digite os coeficientes da equação ax^2 + bx + c = 0
let a = parseFloat(prompt("Digite o valor de a:"));
let b = parseFloat(prompt("Digite o valor de b:"));
let c = parseFloat(prompt("Digite o valor de c:"));

// Calcula o discriminante e as raízes utilizando a fórmula de Bhaskara
let delta = Math.pow(b, 2) - 4 * a * c;
let x1, x2;

if (delta < 0) {
  console.log("A equação não possui raízes reais.");
} else if (delta === 0) {
  x1 = -b / (2 * a);
  console.log("A equação possui uma raiz real: x = " + x1);
} else {
  x1 = (-b + Math.sqrt(delta)) / (2 * a);
  x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log("A equação possui duas raízes reais:");
  console.log("x1 = " + x1);
  console.log("x2 = " + x2);
}
