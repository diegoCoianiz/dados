let victoriasEn_x_rondas;
const estadisticasDelNumero_6 = (opciones, condicion) => {
    numerosPorRonda = [], cantidadDe_6_porRonda = []
    for (let i = 0; i < opciones; i++) {
        let numeroObtenido = Math.floor((Math.random(6) * 6) + 1);
        numerosPorRonda.push(numeroObtenido);
        numeroObtenido === 6 ? cantidadDe_6_porRonda.push(numeroObtenido) : null;
    }
    cantidadDe_6_porRonda.length >= condicion ? victoriasEn_x_rondas.push(1) : null;
}
for (let i = 1; i < 4; i++) {
    totalDeRondas = 5000
    console.log(`${totalDeRondas} rondas con ${6 * i} dados\n`)
    victoriasEn_x_rondas = []
    for (let rondas = 0; rondas < totalDeRondas; rondas++) {
        estadisticasDelNumero_6(6 * i, 1 * i)
    }
    console.log("ganás el ", ((victoriasEn_x_rondas.length / totalDeRondas) * 100), "% de las veces\n")
}