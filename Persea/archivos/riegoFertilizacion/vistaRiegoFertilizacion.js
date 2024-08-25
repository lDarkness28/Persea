// vistaRiegoFertilizacion.js

class VistaRiegoFertilizacion {
    constructor() {
        this.tipoRiegoInput = document.getElementById('tipoRiego');
        this.tipoFertilizanteInput = document.getElementById('tipoFertilizante');
        this.metodoAplicacionFertilizanteInput = document.getElementById('metodoAplicacionFertilizante');
        this.nombreFertilizanteInput = document.getElementById('nombreFertilizante');
        this.cantidadFertilizanteInput = document.getElementById('cantidadFertilizante');
        this.medidaFertilizanteInput = document.getElementById('medidaFertilizante');
        this.riegoButton = document.getElementById('riegoButton');
        this.fertilizacionButton = document.getElementById('fertilizacionButton');
        this.formularioRiego = document.getElementById('formularioRiego');
        this.formularioFertilizacion = document.getElementById('formularioFertilizacion');
    }

    obtenerDatosRiego() {
        return this.tipoRiegoInput.value;
    }

    obtenerDatosFertilizacion() {
        return {
            tipo: this.tipoFertilizanteInput.value,
            metodo: this.metodoAplicacionFertilizanteInput.value,
            nombre: this.nombreFertilizanteInput.value,
            cantidad: parseFloat(this.cantidadFertilizanteInput.value),
            medida: this.medidaFertilizanteInput.value
        };
    }

    mostrarMensaje(mensaje) {
        alert(mensaje);
    }

    deshabilitarFormularioRiego() {
        this.formularioRiego.querySelectorAll('input, select, button').forEach(element => {
            element.disabled = true;
        });
    }

    deshabilitarFormularioFertilizacion() {
        this.formularioFertilizacion.querySelectorAll('input, select, button').forEach(element => {
            element.disabled = true;
        });
    }
}

export default VistaRiegoFertilizacion;
