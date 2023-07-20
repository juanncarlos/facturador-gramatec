import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaBuscar'
})
export class CategoriaBuscarPipe implements PipeTransform {

  transform(categorias: any[], categoriaBusqueda: string): any[] {
    if (!categoriaBusqueda || !categoriaBusqueda) {
      return categorias;
    }

    categoriaBusqueda = categoriaBusqueda.toLowerCase();

    return categorias.filter(categoria =>
      categoria.agregarCategoria.toLowerCase().includes(categoriaBusqueda.toLowerCase())
    );
  }
}