import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'})
export class Contizacion03Service {

    private datos: any[] = [];

    constructor() {
      // Datos de ejemplo
      this.datos = [
        { id: 1, serie: "C001", numero: 1, fecha: "02/08/2023", codigoBarra: 'Objeto 1', productos : [ {nombre: "nombre 1", cantidad: 2.1, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 2, serie: "C001", numero: 2, fecha: "02/08/2023", codigoBarra: 'Objeto 2', productos : [ {nombre: "nombre 1", cantidad: 3.1, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 3, serie: "C001", numero: 3, fecha: "02/08/2023", codigoBarra: 'Objeto 3', productos : [ {nombre: "nombre 1", cantidad: 4.1, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 4, serie: "C001", numero: 4, fecha: "02/08/2023", codigoBarra: 'Objeto 4', productos : [ {nombre: "nombre 1", cantidad: 5.1, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 5, serie: "C001", numero: 5, fecha: "02/08/2023", codigoBarra: 'Objeto 5', productos : [ {nombre: "nombre 1", cantidad: 6.1, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 6, serie: "C001", numero: 6, fecha: "02/08/2023", codigoBarra: 'Objeto 6', productos : [ {nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 7, serie: "C001", numero: 7, fecha: "02/08/2023", codigoBarra: 'Objeto 7', productos : [ {nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 8, serie: "C001", numero: 8, fecha: "02/08/2023", codigoBarra: 'Objeto 8', productos : [ {nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 9, serie: "C001", numero: 9, fecha: "02/08/2023", codigoBarra: 'Objeto 9', productos : [ {nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 10, serie: "C001", numero: 10, fecha: "02/08/2023", codigoBarra: 'Objeto 10', productos : [ {nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 11, serie: "C001", numero: 11, fecha: "02/08/2023", codigoBarra: 'Objeto 11', productos : [ {nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", },
        { id: 12, serie: "C001", numero: 12, fecha: "02/08/2023", codigoBarra: 'Objeto 12', productos : [ {nombre: "nombre 1", cantidad: 3, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 34, clienteID: 12345678, clienteNombre: "juan", metodoPago: "contado", }
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

  //Código para saber el total de la venta
    calcularTotalVenta(venta: any): number {
      let totalVenta = 0;
      for (const producto of venta.productos) {
        totalVenta += producto.totalUnitario();
      }
      return totalVenta;
    }

}
