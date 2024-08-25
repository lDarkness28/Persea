// controladorSeleccionArboles.js

import SeleccionArbolesModelo from './modeloSeleccionArboles.js';
import VistaSeleccionArboles from './vistaSeleccionArboles.js';

class ControladorSeleccionArboles {
    constructor() {
        this.modelo = new SeleccionArbolesModelo();
        this.vista = new VistaSeleccionArboles();
        this.inicializar();
    }

    inicializar() {
        this.vista.agregarEventoGuardar((datos) => this.guardarDatos(datos));
    }

    guardarDatos(datos) {
        // Guardar los datos en el modelo
        this.modelo.guardarDatos(
            datos.preparacionColinos,
            datos.excavacionHoyos,
            datos.plantacion
        );

        // Obtener datos actualizados del modelo
        const datosActualizados = this.modelo.obtenerDatos();

        // Mostrar datos en la vista
        this.vista.mostrarDatos(datosActualizados);

        // Desactivar los campos que han sido seleccionados
        if (datos.preparacionColinos) this.vista.deshabilitarElemento(this.vista.preparacionColinosInput);
        if (datos.excavacionHoyos) this.vista.deshabilitarElemento(this.vista.excavacionHoyosInput);
        if (datos.plantacion) this.vista.deshabilitarElemento(this.vista.plantacionInput);

        // Deshabilitar el tipo de aguacate
        this.vista.deshabilitarTipoAguacate();

        // Verificar si todos los campos están completos y actualizar el estado del botón de guardar
        this.vista.actualizarEstadoBotonGuardar();
    }
}

document.addEventListener('DOMContentLoaded', () => new ControladorSeleccionArboles());
