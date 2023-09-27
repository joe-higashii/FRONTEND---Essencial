let segundos = 0;
let minutos = 0;
let horas = 0;
let tempo;

function iniciarCronometro() {
    tempo = setInterval(() => {
        segundos++;

        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }

        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
        atualizarCronometro();
    }, 1000);
}

function pausarCronometro() {
    clearInterval(tempo);
}

function pararCronometro() {
    clearInterval(tempo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    atualizarCronometro();
}

function atualizarCronometro() {
    const cronometro = document.getElementById("cronometro");
    const segundosFormatados = segundos < 10 ? "0" + segundos : segundos;
    const minutosFormatados = minutos < 10 ? "0" + minutos : minutos;
    const horasFormatadas = horas < 10 ? "0" + horas : horas;

    cronometro.textContent = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
}