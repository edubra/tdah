from flask import Blueprint, render_template, session, redirect, url_for, request
from app.logic import scoring, challenges

main = Blueprint('main', __name__)

@main.route("/")
def index():
    session.clear()
    return render_template("index.html")

@main.route("/desafio/<int:step>", methods=["GET", "POST"])
def desafio(step):
    if request.method == "POST":
        resposta = request.form.get("resposta")
        challenges.salvar_resposta(step, resposta, session)

        if step < 5:
            return redirect(url_for("main.desafio", step=step+1))
        else:
            resultado = scoring.calcular_resultado(session)
            return redirect(url_for("main.resultado", tipo=resultado))

    desafio = challenges.get_desafio(step)

    # Passa o número de cérebros corretos no desafio 1
    if step == 1:
        import random
        session['cerebros_corretos'] = random.randint(1, 4)

    return render_template(
        "challenge.html",
        desafio=desafio,
        step=step,
        cerebros_corretos=session.get('cerebros_corretos', 1)
    )


@main.route("/resultado/<tipo>")
def resultado(tipo):
    return render_template("result.html", tipo=tipo)
