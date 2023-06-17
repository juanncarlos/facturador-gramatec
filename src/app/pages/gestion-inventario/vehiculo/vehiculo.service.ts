import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
    private datos: any[] = [];

  constructor() {
    // Datos de ejemplo
    this.datos = [
      { id: 1, nombre: 'Objeto 1', marca:'aaaaaa bbbbb', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 },
      { id: 2, nombre: 'Objeto 2', marca:'zxcvzx', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 },
      { id: 3, nombre: 'Objeto 3', marca:'afdfs', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 },
      { id: 4, nombre: 'Objeto 4', marca:'ewrqreqwer', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 },
      { id: 5, nombre: 'Objeto 5', marca:'hjkgh', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 },
      { id: 6, nombre: 'Objeto 6', marca:'vbvbnm', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 },
      { id: 7, nombre: 'Objeto 7', marca:'tyututru', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 },
      { id: 8, nombre: 'Objeto 8', marca:'dsffsfasf', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 },
      { id: 9, nombre: 'Objeto 9', marca:'asfasdfasd', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 },
      { id: 10, nombre: 'Objeto 10', marca:'zxcvxzcv', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 },
      { id: 11, nombre: 'Objeto 11', marca:'yuiyui', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 },
      { id: 12, nombre: 'Objeto 12', marca:'dgdfgdsg', tipoVehiculo: 'sdfgdsfg', mtc: 34234, configuracion: 'sdfsd', capCarga: 123000 }
    ];
  }

  obtenerDatos(): any[] {
    return this.datos;
  }

  agregarDato(dato: any): void {
    this.datos.push(dato);
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
