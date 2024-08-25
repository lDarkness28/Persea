// controlador.js

import PreparacionTerrenoModelo from './modeloPreparacionTerreno.js';
import PreparacionTerrenoVista from './vistaPreparacionTerreno.js';

class PreparacionTerrenoControlador {
    constructor() {
        this.modelo = new PreparacionTerrenoModelo();
        this.vista = new PreparacionTerrenoVista();

        // Configurar el evento de guardar con una función de controlador
        this.vista.agregarEventoGuardar((datos) => this.guardarDatos(datos));
    }

    guardarDatos(datos) {
        // Guardar los datos en el modelo
        this.modelo.guardarDatos(datos);
        
        // Obtener datos actualizados del modelo
        const datosActualizados = this.modelo.obtenerDatos();
        
        // Mostrar los datos actualizados en la vista
        this.vista.mostrarDatos(datosActualizados);

        // Desactivar los campos que ya han sido guardados
        if (datos.limpiezaTerreno) this.vista.desactivarElemento(this.vista.limpiezaTerreno);
        if (datos.analisisSuelo) this.vista.desactivarElemento(this.vista.analisisSuelo);
        if (datos.correccionSuelo) this.vista.desactivarElemento(this.vista.correccionSuelo);
        if (datos.labranza) this.vista.desactivarElemento(this.vista.labranza);
        if (datos.delimitacionParcela) this.vista.desactivarElemento(this.vista.delimitacionParcela);

        // Verificar si todos los campos están desactivados y desactivar el botón de guardar si es necesario
        this.verificarDesactivacionBotonGuardar();
    }

    verificarDesactivacionBotonGuardar() {
        if (this.vista.limpiezaTerreno.disabled &&
            this.vista.analisisSuelo.disabled &&
            this.vista.correccionSuelo.disabled &&
            this.vista.labranza.disabled &&
            this.vista.delimitacionParcela.value !== "") {
            this.vista.desactivarBotonGuardar();
        }
    }
}

// Inicializar el controlador al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    new PreparacionTerrenoControlador();
});
