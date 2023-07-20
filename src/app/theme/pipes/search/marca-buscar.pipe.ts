import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marcaBuscar'
})
export class MarcaBuscarPipe implements PipeTransform {

  transform(marcas: any[], marcaBusqueda: string): any[] {
    if (!marcaBusqueda || !marcaBusqueda) {
      return marcas;
    }

    marcaBusqueda = marcaBusqueda.toLowerCase();

    return marcas.filter(marca =>
      marca.agregarMarca.toLowerCase().includes(marcaBusqueda.toLowerCase())
    );
  }
}