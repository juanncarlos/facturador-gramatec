import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cotizacion03Buscar'
})
export class Cotizacion03Pipe implements PipeTransform {

  /* transform(datos: any[], textoBusqueda: string): any[] {
    if (!textoBusqueda) {
      return datos;
    }

    textoBusqueda = textoBusqueda.toLowerCase();

    return datos.filter((dato: any) => {
      
             return dato.clienteNombre.toLowerCase().includes(textoBusqueda);
    });
  } */
  /* transform(datos: any[], textoBusqueda: string, fechaInicio: string, fechaFin: string): any[] {
    const fechaInicioObj = new Date(fechaInicio);
    const fechaFinObj = new Date(fechaFin);

    textoBusqueda = textoBusqueda.toLowerCase();

    return datos.filter(dato => {
      const cumpleNombre = dato.clienteNombre.toLowerCase().includes(textoBusqueda);
      const fechaDato = new Date(dato.fecha);
      const cumpleFechas = (!fechaInicioObj || fechaDato >= fechaInicioObj) &&
                           (!fechaFinObj || fechaDato <= fechaFinObj);
      return cumpleNombre && cumpleFechas;
    });
  } */

  transform(datos: any[], textoBusqueda: string, fechaInicio: string, fechaFin: string): any[] {
    const fechaInicioObj = new Date(fechaInicio);
    const fechaFinObj = new Date(fechaFin);

    // Sumamos 1 día a la fecha de fin para incluir todas las fechas de ese día
    fechaFinObj.setDate(fechaFinObj.getDate() + 1);

    textoBusqueda = textoBusqueda.toLowerCase();

    return datos.filter(dato => {
      const cumpleNombre = dato.clienteNombre.toLowerCase().includes(textoBusqueda);
      const fechaDato = new Date(dato.fecha);

      // Comparamos si la fecha del dato está dentro del rango
      const cumpleFechas = fechaDato >= fechaInicioObj && fechaDato < fechaFinObj;

      return cumpleNombre && cumpleFechas;
    });
  }
}
