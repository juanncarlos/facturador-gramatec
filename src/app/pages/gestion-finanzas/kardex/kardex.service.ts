import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'})
export class KardexService {

    private kardex: any[] = [];
    

    constructor() {
      // Datos de ejemplo
      this.kardex = [
        { id: 1, fecha: "2023/08/01", hora: '11:39:01', producto :  "producto 1.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-1'},
        { id: 2, fecha: "2023/08/02", hora: '11:39:01', producto :  "producto 2.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-2'},
        { id: 3, fecha: "2023/08/03", hora: '11:39:01', producto :  "producto 3.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-3'},
        { id: 4, fecha: "2023/08/04", hora: '11:39:01', producto :  "producto 4.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-4'},
        { id: 5, fecha: "2023/08/05", hora: '11:39:01', producto :  "producto 5.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-5'},
        { id: 6, fecha: "2023/08/06", hora: '11:39:01', producto : "producto 6.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-6'},
        { id: 7, fecha: "2023/08/07", hora: '11:39:01', producto : "producto 7.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-7'},
        { id: 8, fecha: "2023/08/08", hora: '11:39:01', producto : "producto 8.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-8'},
        { id: 9, fecha: "2023/08/09", hora: '11:39:01', producto : "producto 9.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-9'},
        { id: 10,  fecha: "2023/08/10", hora: '11:39:01', producto : "producto 10.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-10' },
        { id: 11,  fecha: "2023/08/11", hora: '11:39:01', producto : "producto 11.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-11' },
        { id: 12,  fecha: "2023/08/15", hora: '11:39:01', producto : "producto 12.1", ingreso: 20, salida: 25, saldo: 5, nota: 'F001-12' }
      ];
    }


    obtenerKardex(): any[] {
        return this.kardex;
    }
}
