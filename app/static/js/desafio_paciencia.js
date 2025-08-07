// desafio_paciencia.js

function iniciarDesafioPaciencia() {
    const btn = document.getElementById("paciencia-btn");
    const resposta = document.getElementById("respostaPaciencia");
    const form = document.getElementById("formPaciencia");
    const mensagem = document.getElementById("mensagem-paciencia");

    let startTime = Date.now();

    btn.onclick = function (e) {
        e.preventDefault();
        let diff = (Date.now() - startTime) / 1000;

        if (diff < 5) {
            resposta.value = "impulsivo"; // clicou cedo demais
        } else if (diff > 7) {
            resposta.value = "inatento"; // demorou demais
        } else {
            resposta.value = "nenhum"; // clique perfeito
        }

        form.submit();
    };
} 
