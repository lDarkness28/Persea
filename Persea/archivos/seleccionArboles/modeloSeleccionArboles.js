// modeloSeleccionArboles.js

class SeleccionArbolesModelo {
    constructor() {
        this.datos = {
            tipoAguacate: null,
            preparacionColinos: null,
            excavacionHoyos: null,
            plantacion: null
        };
    }

    guardarDatos(preparacionColinos, excavacionHoyos, plantacion) {
        const fechaActual = new Date().toLocaleDateString();

        if (preparacionColinos) {
            this.datos.preparacionColinos = fechaActual;
        }

        if (excavacionHoyos) {
            this.datos.excavacionHoyos = fechaActual;
        }

        if (plantacion) {
            this.datos.plantacion = fechaActual;
        }

        this.datos.tipoAguacate = document.getElementById('seleccionVariedades').value;
    }

    obtenerDatos() {
        return { ...this.datos };
    }
}

export default SeleccionArbolesModelo;
