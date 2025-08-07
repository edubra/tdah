function iniciarDesafioVisual() {
    const grid = document.getElementById("grid");
    const tempoSpan = document.getElementById("tempo");
    const cronometro = document.getElementById("cronometro");
    const pergunta = document.getElementById("pergunta-cerebros");

    const emojis = ["🍕", "💣", "🧀", "🦷", "💀", "🍺"];
    const alvo = "🧠";
    const total = 49; // 7x7
    const numCerebros = Math.floor(Math.random() * 4) + 1; // 1 a 4

    let posicoesCerebros = [];
    let clicados = [];

    cronometro.style.display = "block";
    grid.style.display = "grid";

    // Gera posições únicas para os cérebros
    while (posicoesCerebros.length < numCerebros) {
        const pos = Math.floor(Math.random() * total);
        if (!posicoesCerebros.includes(pos)) {
            posicoesCerebros.push(pos);
        }
    }

    for (let i = 0; i < total; i++) {
        let btn = document.createElement("button");
        btn.className = "emoji-btn";
        btn.innerText = posicoesCerebros.includes(i)
            ? alvo
            : emojis[Math.floor(Math.random() * emojis.length)];
        btn.onclick = function (e) {
            e.preventDefault();
            if (posicoesCerebros.includes(i)) {
                if (!clicados.includes(i)) {
                    clicados.push(i);
                    btn.disabled = true;
                    btn.style.opacity = 0.5;
                }
                if (clicados.length === numCerebros) {
                    mostrarPergunta();
                }
            } else {
                respostaAutomaticaFalha();
            }
        };
        grid.appendChild(btn);
    }

    let tempoRestante = 30;
    const cronometroID = setInterval(() => {
        tempoRestante--;
        tempoSpan.textContent = tempoRestante;
        if (tempoRestante <= 0) {
            clearInterval(cronometroID);
            respostaAutomaticaFalha();
        }
    }, 1000);

    function mostrarPergunta() {
        clearInterval(cronometroID);
        grid.style.display = "none";
        cronometro.style.display = "none";
        pergunta.style.display = "block";
    }

    function respostaAutomaticaFalha() {
        document.getElementById("formAutoFalha").submit();
    }
}
