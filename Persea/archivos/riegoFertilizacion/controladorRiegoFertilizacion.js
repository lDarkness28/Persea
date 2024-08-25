// controladorRiegoFertilizacion.js

import AccionAgricolaModelo from './modeloRiegoFertilizacion.js';
import VistaRiegoFertilizacion from './vistaRiegoFertilizacion.js';

class ControladorRiegoFertilizacion {
    constructor() {
        this.modelo = new AccionAgricolaModelo();
        this.vista = new VistaRiegoFertilizacion();
        this.inicializar();
    }

    inicializar() {
        this.vista.riegoButton.addEventListener('click', () => this.guardarRiego());
        this.vista.fertilizacionButton.addEventListener('click', () => this.guardarFertilizacion());
    }

    guardarRiego() {
        const tipoRiego = this.vista.obtenerDatosRiego();
        this.modelo.guardarDatosRiego(tipoRiego);
        console.log(this.modelo.obtenerDatos());
        this.vista.mostrarMensaje(`Riego de tipo ${tipoRiego} guardado con fecha ${this.modelo.obtenerDatos().fechaRiego}`);
        this.vista.deshabilitarFormularioRiego();
    }

    guardarFertilizacion() {
        const datosFertilizacion = this.vista.obtenerDatosFertilizacion();
        this.modelo.guardarDatosFertilizacion(
            datosFertilizacion.tipo,
            datosFertilizacion.metodo,
            datosFertilizacion.nombre,
            datosFertilizacion.cantidad,
            datosFertilizacion.medida
        );
        console.log(this.modelo.obtenerDatos());
        this.vista.mostrarMensaje(`Fertilización con ${datosFertilizacion.tipo} guardada con fecha ${this.modelo.obtenerDatos().fechaFertilizacion}\nNombre fertilizante ${datosFertilizacion.nombre}\ncantidad Fertilizante ${datosFertilizacion.cantidad} ${datosFertilizacion.medida}`);
        this.vista.deshabilitarFormularioFertilizacion();
    }
}

document.addEventListener('DOMContentLoaded', () => new ControladorRiegoFertilizacion());
