import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'})
export class Contizacion03Service {

    private datos: any[] = [];

    constructor() {
      // Datos de ejemplo
      this.datos = [
        { id: 1, serie: "C001", numero: 1, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 1', nombre:'aaaaaa bbbbb', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 2, serie: "C001", numero: 2, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 2', nombre:'zxcvzx', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 3, serie: "C001", numero: 3, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 3', nombre:'afdfs', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 4, serie: "C001", numero: 4, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 4', nombre:'ewrqreqwer', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 5, serie: "C001", numero: 5, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 5', nombre:'hjkgh', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 6, serie: "C001", numero: 6, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 6', nombre:'vbvbnm', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 7, serie: "C001", numero: 7, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 7', nombre:'tyututru', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 8, serie: "C001", numero: 8, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 8', nombre:'dsffsfasf', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 9, serie: "C001", numero: 9, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 9', nombre:'asfasdfasd', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 10, serie: "C001", numero: 10, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 10', nombre:'zxcvxzcv', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 11, serie: "C001", numero: 11, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 11', nombre:'yuiyui', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 12, serie: "C001", numero: 12, cantidad: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 12', nombre:'dgdfgdsg', precioUnitario: 23, total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", }
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
