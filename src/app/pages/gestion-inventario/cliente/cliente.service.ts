import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
    private datos: any[] = [];

  constructor() {
    // Datos de ejemplo
    this.datos = [
      { id: 1, tipoDocumento: 'DNI', numeroDocumento: 77499689, nombre:'cliente 1', direccion: 'direcion 1', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 2, tipoDocumento: 'RUC', numeroDocumento: 20123456789, nombre:'cliente 2', direccion: 'direcion 2', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 3, tipoDocumento: 'RUC', numeroDocumento: 12345678903, nombre:'cliente 3', direccion: 'direcion 3', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 4, tipoDocumento: 'RUC', numeroDocumento: 12345678904, nombre:'cliente 4', direccion: 'direcion 4', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 5, tipoDocumento: 'RUC', numeroDocumento: 12345678905, nombre:'cliente 5', direccion: 'direcion 5', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 6, tipoDocumento: 'RUC', numeroDocumento: 12345678906, nombre:'cliente 6', direccion: 'direcion 6', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 7, tipoDocumento: 'RUC', numeroDocumento: 12345678907, nombre:'cliente 7', direccion: 'direcion 7', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 8, tipoDocumento: 'RUC', numeroDocumento: 12345678908, nombre:'cliente 8', direccion: 'direcion 8', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 9, tipoDocumento: 'RUC', numeroDocumento: 12345678909, nombre:'cliente 9', direccion: 'direcion 9', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 10, tipoDocumento: 'RUC', numeroDocumento: 12345678910, nombre:'cliente 10', direccion: 'direcion 10', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 11, tipoDocumento: 'RUC', numeroDocumento: 12345678911, nombre:'cliente 11', direccion: 'direcion 11', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' },
      { id: 12, tipoDocumento: 'RUC', numeroDocumento: 12345678912, nombre:'cliente 12', direccion: 'direcion 12', departamento: 'Ayacucho', provincia: 'Huamanga', distrito: 'Jesus Nazareno', correo: 'juan@gmail.com', celular: 968965059, activo: 'Activo', habido: 'Habido', nota: 'asdadasdasdasdas' }
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
