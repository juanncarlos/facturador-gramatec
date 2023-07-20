import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'})
export class CategoriaService {

    private categorias: any[] = [];

    constructor() {
      // Datos de ejemplo
      this.categorias = [
        { id: 1, agregarCategoria: 'categoria 1'},
        { id: 2, agregarCategoria: 'categoria 2'},
        { id: 3, agregarCategoria: 'categoria 3'},
        { id: 4, agregarCategoria: 'categoria 4'},
        { id: 5, agregarCategoria: 'categoria 5'},
        { id: 6, agregarCategoria: 'categoria 6'},
        { id: 7, agregarCategoria: 'categoria 7'},
        { id: 8, agregarCategoria: 'categoria 8'},
        { id: 9, agregarCategoria: 'categoria 9'},
        { id: 10, agregarCategoria: 'categoria 10'},
        { id: 11, agregarCategoria: 'categoria 11'},
        { id: 12, agregarCategoria: 'categoria 12'}
      ];
    }
  
    obtenerCategorias(): any[] {
      return this.categorias;
    }
  
    agregarCategoria(categoria: any): void {
      /* this.marcas.push(marca); */
      this.categorias.unshift(categoria);
    }
  
    editarCategoria(id: number, categoria: any): void {
      const index = this.categorias.findIndex(item => item.id === id);
      if (index !== -1) {
        this.categorias[index] = categoria;
      }
    }
  
    eliminarCategoria(id: number): void {
      const index = this.categorias.findIndex(item => item.id === id);
      if (index !== -1) {
        this.categorias.splice(index, 1);
      }
    }

}
