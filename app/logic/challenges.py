desafios = {
    1: {
        "titulo": "Desafio da Atenção",
        "pergunta": "Encontre o cérebro entre os objetos antes que o tempo acabe!",
        "tipo": "visual"
    },
    2: {
        "titulo": "Reflexo Rápido",
        "pergunta": "Clique apenas quando o botão ficar verde!",
        "tipo": "reflexo"
    },
    3: {
        "titulo": "Memória de Trabalho",
        "pergunta": "Memorize a sequência e reproduza na ordem correta.",
        "tipo": "memoria"
    },    
    4: {
        "titulo": "Escolha Emocional",
        "pergunta": "Você está atrasado para uma reunião importante e perdeu o ônibus. O que você faz?",
        "tipo": "decisao",
        "opcoes": [
            {"texto": "Fica irritado, xinga alto e bate o pé na calçada", "valor": "impulsivo"},
            {"texto": "Tenta achar outro ônibus mesmo que chegue atrasado", "valor": "nenhum"},
            {"texto": "Desiste da reunião e vai comer um lanche", "valor": "inatento"},
            {"texto": "Corre pra tentar pegar um táxi ou carona", "valor": "hiperativo"}
        ]
    },
        5: {
        "titulo": "Teste de Paciência",
        "pergunta": "Espere 5 segundos e clique no botão. Nem antes, nem depois!",
        "tipo": "paciência"
    }


    # ...
}



def get_desafio(step):
    return desafios.get(step, {})

def salvar_resposta(step, resposta, session):
    session[f"resposta_{step}"] = resposta
