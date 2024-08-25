// vista.js

class PreparacionTerrenoVista {
    constructor() {
        this.limpiezaTerreno = document.getElementById('limpiezaTerreno');
        this.analisisSuelo = document.getElementById('analisisSuelo');
        this.correccionSuelo = document.getElementById('correccionSuelo');
        this.labranza = document.getElementById('labranza');
        this.delimitacionParcela = document.getElementById('delimitacionParcela');
        this.botonGuardar = document.getElementById('guardar');
    }

    obtenerValoresFormulario() {
        return {
            limpiezaTerreno: this.limpiezaTerreno.checked,
            analisisSuelo: this.analisisSuelo.checked,
            correccionSuelo: this.correccionSuelo.checked,
            labranza: this.labranza.checked,
            delimitacionParcela: this.delimitacionParcela.value
        };
    }

    agregarEventoGuardar(handler) {
        this.botonGuardar.addEventListener('click', () => {
            const valores = this.obtenerValoresFormulario();
            handler(valores);
        });
    }

    mostrarDatos(datos) {
        let mensaje = "Datos guardados:\n";
        mensaje += `Limpieza del Terreno: ${datos.limpiezaTerreno ? `${datos.limpiezaTerreno}` : 'No realizado'}\n`;
        mensaje += `Análisis del Suelo: ${datos.analisisSuelo ? `${datos.analisisSuelo}` : 'No realizado'}\n`;
        mensaje += `Corrección del Suelo: ${datos.correccionSuelo ? `${datos.correccionSuelo}` : 'No realizado'}\n`;
        mensaje += `Labranza: ${datos.labranza ? `${datos.labranza}` : 'No realizado'}\n`;
        mensaje += `Delimitación de la Parcela: ${datos.delimitacionParcela ?  `${datos.delimitacionParcela}` : 'Delimitación de la Parcela: No realizado'}\n`;

        alert(mensaje);
    }

    desactivarElemento(elemento) {
        elemento.disabled = true;
    }

    desactivarBotonGuardar() {
        this.botonGuardar.disabled = true;
    }
}

export default PreparacionTerrenoVista;
