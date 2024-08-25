// modeloRiegoFertilizacion.js

class AccionAgricolaModelo {
    constructor() {
        this.datos = {
            tipoRiego: null,
            fechaRiego: null,
            tipoFertilizante: null,
            metodoAplicacion: null,
            nombreFertilizante: null,
            cantidadFertilizante: null,
            medidaFertilizante: null,
            fechaFertilizacion: null
        };
    }

    guardarDatosRiego(tipoRiego) {
        this.datos.tipoRiego = tipoRiego;
        this.datos.fechaRiego = new Date().toLocaleDateString();
    }

    guardarDatosFertilizacion(tipoFertilizante, metodoAplicacion, nombreFertilizante, cantidadFertilizante, medidaFertilizante) {
        this.datos.tipoFertilizante = tipoFertilizante;
        this.datos.metodoAplicacion = metodoAplicacion;
        this.datos.nombreFertilizante = nombreFertilizante;
        this.datos.cantidadFertilizante = cantidadFertilizante;
        this.datos.medidaFertilizante = medidaFertilizante;
        this.datos.fechaFertilizacion = new Date().toLocaleDateString();
    }

    obtenerDatos() {
        return { ...this.datos };
    }
}

export default AccionAgricolaModelo;
