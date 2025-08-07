def calcular_resultado(session):
    pontuacoes = {
        "inatento": 0,
        "hiperativo": 0,
        "impulsivo": 0,
        "nenhum": 0     # ✅ Adicione esta linha
    }

    for k, v in session.items():
        if k.startswith("resposta_"):
            pontuacoes[v] += 1

    # Ordenar por pontuação
    sorted_scores = sorted(pontuacoes.items(), key=lambda x: x[1], reverse=True)

    # Ignorar "nenhum" se houver outros com pontuação
    sem_neutro = [item for item in sorted_scores if item[0] != "nenhum"]

    if sem_neutro and sem_neutro[0][1] == sem_neutro[1][1]:
        return "combinado"
    elif sem_neutro and sem_neutro[0][1] > 0:
        return sem_neutro[0][0]
    else:
        return "nenhum"
