import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'})
export class KardexValoradoService {

    private kardexValorado: any[] = [];
    

    constructor() {
      // Datos de ejemplo
      this.kardexValorado = [
        { id: 1, stock: 10, producto :  "producto 1.1",precioCompra:  20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'},
        { id: 2, stock: 10, producto :  "producto 2.1",precioCompra:  20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'},
        { id: 3, stock: 10, producto :  "producto 3.1",precioCompra:  20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'},
        { id: 4, stock: 10, producto :  "producto 4.1",precioCompra:  20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'},
        { id: 5, stock: 10, producto :  "producto 5.1",precioCompra:  20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'},
        { id: 6, stock: 10, producto : "producto 6.1", precioCompra: 20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'},
        { id: 7, stock: 10, producto : "producto 7.1", precioCompra: 20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'},
        { id: 8, stock: 10, producto : "producto 8.1", precioCompra: 20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'},
        { id: 9, stock: 10, producto : "producto 9.1", precioCompra: 20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'},
        { id: 10, stock: 10,  producto : "producto 10.1",precioCompra:  20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'},
        { id: 11, stock: 10,  producto : "producto 11.1",precioCompra:  20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'},
        { id: 12, stock: 10,  producto : "producto 12.1",precioCompra:  20, totalPC: 20, precioVenta: 25, totalPV: 25, categoria: 'producto'}
      ];
    }


    obtenerKardexValorado(): any[] {
        return this.kardexValorado;
    }

}
