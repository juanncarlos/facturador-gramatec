import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'})
export class GanaciaService {

    private ganancias: any[] = [];
    

    constructor() {
      // Datos de ejemplo
      this.ganancias = [
        { id: 1, fecha: "2023/08/01", cantidad: 1, producto :  "producto 1.1", precioCompra: 20, precioVenta: 25, ganancia: 5},
        { id: 2, fecha: "2023/08/02", cantidad: 2, producto :  "producto 2.1", precioCompra: 20, precioVenta: 25, ganancia: 5},
        { id: 3, fecha: "2023/08/03", cantidad: 3, producto :  "producto 3.1", precioCompra: 20, precioVenta: 25, ganancia: 5},
        { id: 4, fecha: "2023/08/04", cantidad: 4, producto :  "producto 4.1", precioCompra: 20, precioVenta: 25, ganancia: 5},
        { id: 5, fecha: "2023/08/05", cantidad: 5, producto :  "producto 5.1", precioCompra: 20, precioVenta: 25, ganancia: 5},
        { id: 6, fecha: "2023/08/06", cantidad: 6, producto : "producto 6.1", precioCompra: 20, precioVenta: 25, ganancia: 5},
        { id: 7, fecha: "2023/08/07", cantidad: 7, producto : "producto 7.1", precioCompra: 20, precioVenta: 25, ganancia: 5},
        { id: 8, fecha: "2023/08/08", cantidad: 8, producto : "producto 8.1", precioCompra: 20, precioVenta: 25, ganancia: 5},
        { id: 9, fecha: "2023/08/09", cantidad: 9, producto : "producto 9.1", precioCompra: 20, precioVenta: 25, ganancia: 5},
        { id: 10,  fecha: "2023/08/10", cantidad: 10, producto : "producto 10.1", precioCompra: 20, precioVenta: 25, ganancia: 5 },
        { id: 11,  fecha: "2023/08/11", cantidad: 11, producto : "producto 11.1", precioCompra: 20, precioVenta: 25, ganancia: 5 },
        { id: 12,  fecha: "2023/08/15", cantidad: 12, producto : "producto 12.1", precioCompra: 20, precioVenta: 25, ganancia: 5 }
      ];
    }


    obtenerGanancias(): any[] {
        return this.ganancias;
    }

}
