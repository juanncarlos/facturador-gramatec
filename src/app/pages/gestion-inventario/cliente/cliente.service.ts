import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
    private datos: any[] = [];

  constructor() {
    // Datos de ejemplo
    this.datos = [
      { id: 1, tipoDocumento: 'RUC', numeroDocumento: 12345678901, nombre:'aaaaaa bbbbb', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 2, tipoDocumento: 'RUC', numeroDocumento: 12345678902, nombre:'zxcvzx', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 3, tipoDocumento: 'RUC', numeroDocumento: 12345678903, nombre:'afdfs', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 4, tipoDocumento: 'RUC', numeroDocumento: 12345678904, nombre:'ewrqreqwer', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 5, tipoDocumento: 'RUC', numeroDocumento: 12345678905, nombre:'hjkgh', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 6, tipoDocumento: 'RUC', numeroDocumento: 12345678906, nombre:'vbvbnm', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 7, tipoDocumento: 'RUC', numeroDocumento: 12345678907, nombre:'tyututru', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 8, tipoDocumento: 'RUC', numeroDocumento: 12345678908, nombre:'dsffsfasf', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 9, tipoDocumento: 'RUC', numeroDocumento: 12345678909, nombre:'asfasdfasd', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 10, tipoDocumento: 'RUC', numeroDocumento: 12345678910, nombre:'zxcvxzcv', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 11, tipoDocumento: 'RUC', numeroDocumento: 12345678911, nombre:'yuiyui', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 12, tipoDocumento: 'RUC', numeroDocumento: 12345678912, nombre:'dgdfgdsg', direccion: 'sdfgdsfg', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' }
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
