import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kardexValoradoBuscar'
})
export class KardexValoradoBuscarPipe implements PipeTransform {

  transform(datos: any[], textoBusqueda: string): any[] {
    if (!textoBusqueda) {
      return datos;
    }

    textoBusqueda = textoBusqueda.toLowerCase();

    return datos.filter((dato: any) => {
      // Personaliza la lógica de filtrado según tus necesidades
      /* return dato.nombre.toLowerCase().includes(textoBusqueda) ||
             dato.marca.toLowerCase().includes(textoBusqueda); */
             return dato.producto.toLowerCase().includes(textoBusqueda);
    });
  }

}
