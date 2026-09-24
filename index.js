const META_HORAS_ESTUDO = 4;
const META_SIMULADOS_SEMANA = 2;

let horasEstudadasHoje = 5;
let quantidadeSimuladosFeitos = 1;
let pausaParaDescanso = true;
let fezRedacaoHoje = false;

console.log("=== RELATÓRIO COMPLETO DE ESTUDOS ===");

if (horasEstudadasHoje >= META_HORAS_ESTUDO) {
    console.log("Tempo:Meta de horas atingida");
} else {
    console.log("Tempo:Meta de horas não atingida");
}

if (pausaParaDescanso === true) {
    console.log("Pausas:Fez pausa e descansou a mente");
} else {
    console.log("Pausas:Não fez pausas para descansar");
}

if (quantidadeSimuladosFeitos >= META_SIMULADOS_SEMANA) {
    console.log("Simulados:Meta concluida"); 
} else {
    console.log("Simulados:Meta não concluida");
}

if (fezRedacaoHoje === true) {
    console.log("Redação:Fez a redação hoje");
} else {
    console.log("Redação:Não fez redação hoje")
}

console.log("==================================");