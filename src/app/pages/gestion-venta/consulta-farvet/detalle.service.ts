import { Injectable } from '@angular/core';

export interface CotizacionDetalle {
    nombreCliente: string;
    totalCotizacion: number;
    productos: {
    producto: any; // Puedes usar el tipo correspondiente a tus productos
    cantidad: number;
    precioUnitario: number;
    total: number;
  }[];
  }

@Injectable({
  providedIn: 'root'})
export class DetalleService {
    
    
    detallesEjemplo: CotizacionDetalle = {
        nombreCliente: 'Juan Pérez',
        totalCotizacion: 150.0,
        productos: [
          { 
            producto: { id: 1, nombre: 'Producto 1', precio: 10.0 },
            cantidad: 2,
            precioUnitario: 10.0,
            total: 20.0
          },
          {
            producto: { id: 2, nombre: 'Producto 2', precio: 20.0 },
            cantidad: 3,
            precioUnitario: 20.0,
            total: 60.0
          },
          // ... otros productos
        ]
      };

    detalles: any[] = []; // Almacena los detalles de la cotización

    constructor() { }
  
    agregarDetalle(detalle: CotizacionDetalle) {
        this.detalles.push(detalle);
    }
    
      editarDetalle(index: number, detalle: CotizacionDetalle) {
        this.detalles[index] = detalle;
    }
    
      eliminarDetalle(index: number) {
        this.detalles.splice(index, 1);
    }
    
      obtenerDetalles() {
        return this.detalles;
    }
  

}
