function iniciarDesafioReflexo() {
    const reflexoBtn = document.getElementById("reflexo-btn");
    const mensagem = document.getElementById("mensagem");
    const respostaInput = document.getElementById("respostaReflexo");

    let clicouAntes = false;

    reflexoBtn.disabled = true;
    reflexoBtn.style.backgroundColor = "";
    mensagem.innerText = "Aguarde...";

    reflexoBtn.addEventListener("click", function () {
        if (reflexoBtn.style.backgroundColor === "green") {
            respostaInput.value = "nenhum"; // clicou na hora certa
        } else {
            respostaInput.value = "impulsivo"; // clicou antes
        }
        document.getElementById("formReflexo").submit();
    });

    // Espera aleatória antes de ativar o botão (2 a 6 segundos)
    const tempo = Math.floor(Math.random() * 4000) + 2000;

    setTimeout(() => {
        reflexoBtn.disabled = false;
        reflexoBtn.style.backgroundColor = "green";
        mensagem.innerText = "Clique agora!";
    }, tempo);
}
