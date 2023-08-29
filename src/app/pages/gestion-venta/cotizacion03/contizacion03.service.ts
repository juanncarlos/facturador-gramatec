import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'})
export class Contizacion03Service {

    private datos: any[] = [];
    

    constructor() {
      // Datos de ejemplo
      this.datos = [
        { id: 1, serie: "C001", numero: 1, fecha: "2023/08/01", codigoBarra: 'Objeto 1', productos : [ {id: 1, nombre: "nombre 1", cantidad: 2.1, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 2, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 1.1", clienteDireccion: "direccion 1.1", metodoPago: "contado", },
        { id: 2, serie: "C001", numero: 2, fecha: "2023/08/02", codigoBarra: 'Objeto 2', productos : [ {id: 1, nombre: "nombre 1", cantidad: 3.1, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 3, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 2.1", clienteDireccion: "direccion 1.2", metodoPago: "contado", },
        { id: 3, serie: "C001", numero: 3, fecha: "2023/08/03", codigoBarra: 'Objeto 3', productos : [ {id: 1, nombre: "nombre 1", cantidad: 4.1, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 4, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 3.1", clienteDireccion: "direccion 1.3", metodoPago: "contado", },
        { id: 4, serie: "C001", numero: 4, fecha: "2023/08/04", codigoBarra: 'Objeto 4', productos : [ {id: 1, nombre: "nombre 1", cantidad: 5.1, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 5, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 4.1", clienteDireccion: "direccion 1.4", metodoPago: "contado", },
        { id: 5, serie: "C001", numero: 5, fecha: "2023/08/05", codigoBarra: 'Objeto 5', productos : [ {id: 1, nombre: "nombre 1", cantidad: 6.1, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 3, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 5.1", clienteDireccion: "direccion 1.5", metodoPago: "contado", },
        { id: 6, serie: "C001", numero: 6, fecha: "2023/08/06", codigoBarra: 'Objeto 6', productos : [ {id: 1, nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 3, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 6.1", clienteDireccion: "direccion 1.6", metodoPago: "contado", },
        { id: 7, serie: "C001", numero: 7, fecha: "2023/08/07", codigoBarra: 'Objeto 7', productos : [ {id: 1, nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 3, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 7.1", clienteDireccion: "direccion 1.7", metodoPago: "contado", },
        { id: 8, serie: "C001", numero: 8, fecha: "2023/08/08", codigoBarra: 'Objeto 8', productos : [ {id: 1, nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 3, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 8.1", clienteDireccion: "direccion 1.8", metodoPago: "contado", },
        { id: 9, serie: "C001", numero: 9, fecha: "2023/08/09", codigoBarra: 'Objeto 9', productos : [ {id: 1, nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 3, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 9.1", clienteDireccion: "direccion 1.9", metodoPago: "contado", },
        { id: 10, serie: "C001", numero: 10, fecha: "2023/08/10", codigoBarra: 'Objeto 10', productos : [ {id: 1, nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 3, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 10.1", clienteDireccion: "direccion 1.10", metodoPago: "contado", },
        { id: 11, serie: "C001", numero: 11, fecha: "2023/08/11", codigoBarra: 'Objeto 11', productos : [ {id: 1, nombre: "nombre 1", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 3, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 11.1", clienteDireccion: "direccion 1.11", metodoPago: "contado", },
        { id: 12, serie: "C001", numero: 12, fecha: "2023/08/15", codigoBarra: 'Objeto 12', productos : [ {id: 1, nombre: "nombre 1", cantidad: 3, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}},{id: 3, nombre: "nombre 2", cantidad: 2, precioUnitario: 25, totalUnitario: function(){return this.cantidad * this.precioUnitario}}], total: 0, clienteID: 12345678, clienteNombre: "juan 12.1", clienteDireccion: "direccion 1.12", metodoPago: "contado", }
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
