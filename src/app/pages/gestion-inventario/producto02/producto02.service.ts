import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'})
export class Producto02Service {

    private datos: any[] = [];

    constructor() {
      // Datos de ejemplo
      this.datos = [
        { id: 1, codigoBarra: 'Objeto 1', nombre:'aaaaaa bbbbb', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 15.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' },
        { id: 2, codigoBarra: 'Objeto 2', nombre:'zxcvzx', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 25.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' },
        { id: 3, codigoBarra: 'Objeto 3', nombre:'afdfs', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 33.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' },
        { id: 4, codigoBarra: 'Objeto 4', nombre:'ewrqreqwer', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 22.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' },
        { id: 5, codigoBarra: 'Objeto 5', nombre:'hjkgh', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 10.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' },
        { id: 6, codigoBarra: 'Objeto 6', nombre:'vbvbnm', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 5.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' },
        { id: 7, codigoBarra: 'Objeto 7', nombre:'tyututru', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 25.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' },
        { id: 8, codigoBarra: 'Objeto 8', nombre:'dsffsfasf', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 42.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' },
        { id: 9, codigoBarra: 'Objeto 9', nombre:'asfasdfasd', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 11.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' },
        { id: 10, codigoBarra: 'Objeto 10', nombre:'zxcvxzcv', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 123.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' },
        { id: 11, codigoBarra: 'Objeto 11', nombre:'yuiyui', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 25.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' },
        { id: 12, codigoBarra: 'Objeto 12', nombre:'dgdfgdsg', unidadMedida: 'sdfgdsfg', stock: 34234, marca: 'sdfsd', precioCompra: 12.00, precioVenta: 11.00, categoria: 'nose', peso: 5, descripcion: 'asdasd' }
      ];
    }
  
    obtenerDatos(): any[] {
      return this.datos;
    }
  
    agregarDato(dato: any): void {
      this.datos.unshift(dato);
    }
  
    editarDato(id: number, dato: any): void {
      const index = this.datos.findIndex(item => item.id === id);
      if (index !== -1) {
        this.datos[index] = dato;
      }
    }
  
    eliminarDato(id: number): void {
      const index = this.datos.findIndex(item => item.id === id);
      if (index !== -1) {
        this.datos.splice(index, 1);
      }
    }

}
