const calcular = document.getElementById("calcular");

function fazerCalculo() {
  const nome = document.getElementById("nome").value;
  const valor = document.getElementById("valor").value;
  const tempo = document.getElementById("tempo").value;
  const i = document.getElementById("taxa").value / 100;
  const resultado = document.getElementById("resultado");

  if (valor !== "" && i !== "" && nome !== "" && tempo !== "") {
    const vr = valor * (((1 + i) ** tempo - 1) / i).toFixed(2);

    resultado.textContent = `${nome}, se você aplicar ${valor}, 
        à taxa de juros de ${i}, durante ${tempo}, você acomulara ${vr}`;
  } else {
    resultado.textContent =
      "Para calcular o seu PACE , preencha todos os campos.";
  }
}
calcular.addEventListener("click", fazerCalculo);
