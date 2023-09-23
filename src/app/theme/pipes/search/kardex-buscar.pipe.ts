import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kardexBuscar'
})
export class KardexBuscarPipe implements PipeTransform {

  transform(kardex: any[], textoBusqueda: string, fechaInicio: string, fechaFin: string): any[] {
    const fechaInicioObj = new Date(fechaInicio);
    const fechaFinObj = new Date(fechaFin);

    // Sumamos 1 día a la fecha de fin para incluir todas las fechas de ese día
    fechaFinObj.setDate(fechaFinObj.getDate() + 1);

    textoBusqueda = textoBusqueda.toLowerCase();

    return kardex.filter(kardex => {
      const cumpleNombre = kardex.producto.toLowerCase().includes(textoBusqueda);
      const fechaDato = new Date(kardex.fecha);

      // Comparamos si la fecha del dato está dentro del rango
      const cumpleFechas = fechaDato >= fechaInicioObj && fechaDato < fechaFinObj;

      return cumpleNombre && cumpleFechas;
    });
  }

}
