let level = 1;
const maxLevel = 3;
const sequencia = [];
const escolhaFeita = [];

function iniciarDesafioMemoria() {
    const emojis = ["🍎", "🍌", "🍒", "🍇", "🍓", "🥝", "🍍"];

    iniciarLevel();

    function iniciarLevel() {
        sequencia.length = 0;
        escolhaFeita.length = 0;
        let tamanhoSequencia = (level === 1) ? 3 : (level === 2) ? 4 : 6;

        const sequenciaDiv = document.getElementById("sequencia");
        const opcoesDiv = document.getElementById("opcoes");
        const mensagemMemoria = document.getElementById("mensagem-memoria");

        sequenciaDiv.innerHTML = "";
        opcoesDiv.innerHTML = "";
        document.getElementById("escolha-container").style.display = "none";
        mensagemMemoria.innerText = `Nível ${level}: Memorize a sequência`;

        for (let i = 0; i < tamanhoSequencia; i++) {
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            sequencia.push(emoji);
            const span = document.createElement("span");
            span.innerText = emoji;
            span.className = "emoji-memo";
            sequenciaDiv.appendChild(span);
        }

        setTimeout(() => {
            sequenciaDiv.innerHTML = "🧠🧠🧠";
            mensagemMemoria.innerText = "Reproduza a sequência";
            document.getElementById("escolha-container").style.display = "block";

            let embaralhada = [...sequencia];
            for (let i = embaralhada.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [embaralhada[i], embaralhada[j]] = [embaralhada[j], embaralhada[i]];
            }

            embaralhada.forEach((emoji) => {
                const btn = document.createElement("button");
                btn.innerText = emoji;
                btn.className = "emoji-btn";
                btn.onclick = function (e) {
                    e.preventDefault();
                    if (escolhaFeita.length < tamanhoSequencia) {
                        escolhaFeita.push(emoji);
                        btn.disabled = true;
                        btn.style.opacity = 0.5;
                    }
                };
                opcoesDiv.appendChild(btn);
            });
        }, 3000);
    }
}

function enviarSequencia() {
    const correta = sequencia.join("");
    const resposta = escolhaFeita.join("");
    const respostaInput = document.getElementById("respostaMemoria");

    if (correta === resposta) {
        glowSequencia("green");
        if (level < maxLevel) {
            level++;
            setTimeout(() => {
                iniciarDesafioMemoria(); // reinicia o desafio no próximo nível
            }, 2000);
        } else {
            respostaInput.value = "nenhum";
            setTimeout(() => {
                document.getElementById("formMemoria").submit();
            }, 2000);
        }
    } else {
        glowSequencia("red");
        respostaInput.value = "inatento";
        setTimeout(() => {
            document.getElementById("formMemoria").submit();
        }, 2000);
    }
}

function glowSequencia(cor) {
    const buttons = document.querySelectorAll("#opcoes .emoji-btn");
    buttons.forEach(btn => {
        btn.style.boxShadow = `0 0 10px ${cor}`;
    });
}
