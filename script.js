
const controle = document.getElementById("controleOnda");

const valorOnda = document.getElementById("valorOnda");
const tipoResultado = document.getElementById("tipoResultado");
const frequencia = document.getElementById("frequencia");
const tituloResultado = document.getElementById("tituloResultado");
const descricaoResultado = document.getElementById("descricaoResultado");
const indicadorCor = document.getElementById("indicadorCor");

function atualizarSimulador() {

    let comprimento = Number(controle.value);

    // Calcula a frequência usando a velocidade da luz
    let velocidadeLuz = 300000000;
    let comprimentoMetros = comprimento / 1000000000;

    let resultadoFrequencia = velocidadeLuz / comprimentoMetros;

    let frequenciaFormatada = resultadoFrequencia.toExponential(2)
        .replace("e+", " × 10^");

    valorOnda.textContent = comprimento;

    frequencia.textContent = frequenciaFormatada + " Hz";

    // Identifica o tipo de ultravioleta
    if (comprimento >= 315) {

        tipoResultado.textContent = "UVA";
        tituloResultado.textContent = "Ultravioleta A";

        descricaoResultado.textContent =
            "Possui comprimento de onda entre 315 e 400 nm. Está presente na luz solar e pode contribuir para o envelhecimento da pele.";

    } else if (comprimento >= 280) {

        tipoResultado.textContent = "UVB";
        tituloResultado.textContent = "Ultravioleta B";

        descricaoResultado.textContent =
            "Possui comprimento de onda entre 280 e 315 nm. Participa da produção de vitamina D, mas também pode causar queimaduras solares.";

    } else {

        tipoResultado.textContent = "UVC";
        tituloResultado.textContent = "Ultravioleta C";

        descricaoResultado.textContent =
            "Possui comprimento de onda entre 100 e 280 nm. É utilizado em equipamentos específicos de desinfecção e pode causar danos aos olhos e à pele.";

    }

    // Move o indicador de acordo com o comprimento de onda
    let posicao = ((comprimento - 100) / 300) * 100;

    indicadorCor.style.left = posicao + "%";

}

// Atualiza quando o usuário mexe na barra
controle.addEventListener("input", atualizarSimulador);

// Botões para selecionar cada tipo
function selecionarTipo(valor) {

    controle.value = valor;

    atualizarSimulador();

}

// Executa o simulador ao abrir a página
atualizarSimulador();
