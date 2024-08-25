// vistaSeleccionArboles.js

class VistaSeleccionArboles {
    constructor() {
        this.tipoAguacateInput = document.getElementById('seleccionVariedades');
        this.preparacionColinosInput = document.getElementById('preparacionColinos');
        this.excavacionHoyosInput = document.getElementById('excavacionHoyos');
        this.plantacionInput = document.getElementById('plantacion');
        this.guardarButton = document.getElementById('guardar');

        // Añadir un listener para el cambio en el tipo de aguacate
        this.tipoAguacateInput.addEventListener('change', () => this.deshabilitarTipoAguacate());
    }

    obtenerDatos() {
        return {
            tipoAguacate: this.tipoAguacateInput.value,
            preparacionColinos: this.preparacionColinosInput.checked,
            excavacionHoyos: this.excavacionHoyosInput.checked,
            plantacion: this.plantacionInput.checked
        };
    }

    agregarEventoGuardar(handler) {
        this.guardarButton.addEventListener('click', () => {
            const datos = this.obtenerDatos();
            handler(datos);
        });
    }

    mostrarDatos(datos) {
        let mensaje = "Datos guardados:\n";
        mensaje += `Tipo de aguacate: ${datos.tipoAguacate}\n`;
        mensaje += `Preparación de colinos: ${datos.preparacionColinos ? `Guardado con fecha ${datos.preparacionColinos}` : 'No realizado'}\n`;
        mensaje += `Excavación de hoyos: ${datos.excavacionHoyos ? `Guardado con fecha ${datos.excavacionHoyos}` : 'No realizado'}\n`;
        mensaje += `Plantación: ${datos.plantacion ? `Guardado con fecha ${datos.plantacion}` : 'No realizado'}\n`;

        alert(mensaje);
    }

    deshabilitarElemento(elemento) {
        elemento.disabled = true;
    }

    deshabilitarTipoAguacate() {
        this.tipoAguacateInput.disabled = true;
    }

    desactivarBotonGuardar() {
        this.guardarButton.disabled = true;
    }

    activarBotonGuardar() {
        this.guardarButton.disabled = false;
    }

    verificarCamposCompletos() {
        const datos = this.obtenerDatos();
        return datos.tipoAguacate !== "" &&
               (datos.preparacionColinos && datos.excavacionHoyos && datos.plantacion);
    }

    actualizarEstadoBotonGuardar() {
        if (this.verificarCamposCompletos()) {
            this.desactivarBotonGuardar();
        } else {
            this.activarBotonGuardar();
        }
    }
}

export default VistaSeleccionArboles;
