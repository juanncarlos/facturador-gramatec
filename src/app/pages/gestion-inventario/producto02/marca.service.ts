import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'})
export class MarcaService {

    private marcas: any[] = [];

    constructor() {
      // Datos de ejemplo
      this.marcas = [
        { id: 1, agregarMarca: 'Marca 1'},
        { id: 2, agregarMarca: 'Marca 2'},
        { id: 3, agregarMarca: 'Marca 3'},
        { id: 4, agregarMarca: 'Marca 4'},
        { id: 5, agregarMarca: 'Marca 5'},
        { id: 6, agregarMarca: 'Marca 6'},
        { id: 7, agregarMarca: 'Marca 7'},
        { id: 8, agregarMarca: 'Marca 8'},
        { id: 9, agregarMarca: 'Marca 9'},
        { id: 10, agregarMarca: 'Marca 10'},
        { id: 11, agregarMarca: 'Marca 11'},
        { id: 12, agregarMarca: 'Marca 12'}
      ];
    }
  
    obtenerMarcas(): any[] {
      return this.marcas;
    }
  
    agregarMarca(marca: any): void {
      /* this.marcas.push(marca); */
      this.marcas.unshift(marca);
    }
  
    editarMarca(id: number, marca: any): void {
      const index = this.marcas.findIndex(item => item.id === id);
      if (index !== -1) {
        this.marcas[index] = marca;
      }
    }
  
    eliminarMarca(id: number): void {
      const index = this.marcas.findIndex(item => item.id === id);
      if (index !== -1) {
        this.marcas.splice(index, 1);
      }
    }

}
