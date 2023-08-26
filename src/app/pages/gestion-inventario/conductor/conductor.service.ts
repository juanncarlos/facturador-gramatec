import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
    private datos: any[] = [];

  constructor() {
    // Datos de ejemplo
    this.datos = [
      { id: 1, nombre: 'juan', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' },
      { id: 2, nombre: 'carlos', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' },
      { id: 3, nombre: 'Denis', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' },
      { id: 4, nombre: 'Hugo', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' },
      { id: 5, nombre: 'Hector', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' },
      { id: 6, nombre: 'Pablo', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' },
      { id: 7, nombre: 'Eduard', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' },
      { id: 8, nombre: 'Kennedy', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' },
      { id: 9, nombre: 'Bryan', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' },
      { id: 10, nombre: 'Marca', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' },
      { id: 11, nombre: 'Victor', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' },
      { id: 12, nombre: 'Rigoberto', dni: 12345678, direccion: 'sdfgdsfg', licencia: 'H34234', categoria: 'sdfsd', fechaNacimiento: '30/06/1995',fechaVencLicencia: '30/06/2023', correo: 'juan@gmail.com', celular: 968965059, nota: 'sadfdfasfweqr werwqersf sadf sawerwerqw esadfwre' }
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

