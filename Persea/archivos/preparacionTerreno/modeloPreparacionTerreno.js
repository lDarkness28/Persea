// modelo.js

class PreparacionTerrenoModelo {
    constructor() {
        this.datos = {
            limpiezaTerreno: null,
            analisisSuelo: null,
            correccionSuelo: null,
            labranza: null,
            delimitacionParcela: null
        };
    }

    guardarDatos(datos) {
        const fechaActual = new Date().toLocaleDateString();

        if (datos.limpiezaTerreno) {
            this.datos.limpiezaTerreno = fechaActual;
        }

        if (datos.analisisSuelo) {
            this.datos.analisisSuelo = fechaActual;
        }

        if (datos.correccionSuelo) {
            this.datos.correccionSuelo = fechaActual;
        }

        if (datos.labranza) {
            this.datos.labranza = fechaActual;
        }

        if (datos.delimitacionParcela) {
            this.datos.delimitacionParcela = delimitacionParcela.value
        }
    }

    obtenerDatos() {
        return { ...this.datos };
    }
}

export default PreparacionTerrenoModelo;
