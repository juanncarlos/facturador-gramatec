import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizacion03',
  templateUrl: './cotizacion03.component.html',
  styleUrls: ['./cotizacion03.component.scss']
})
export class Cotizacion03Component  {
    
  productos: any[] = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 20 },
    { id: 3, nombre: 'Producto 3', precio: 30 },
    { id: 4, nombre: 'Producto 4', precio: 40 },
    { id: 5, nombre: 'Producto 5', precio: 50 },
    { id: 1, nombre: 'Producto 6', precio: 10 },
    { id: 2, nombre: 'Producto 7', precio: 20 },
    { id: 3, nombre: 'Producto 8', precio: 30 },
    { id: 4, nombre: 'Producto 9', precio: 40 },
    { id: 5, nombre: 'Producto 10', precio: 50 }
  ];

  /* nombres: string[] = ['Juan', 'María', 'Pedro', 'Luis', 'Ana']; */
  cantidadMostrar: number = 3;

  productosFiltrados: any[] = [];
  terminoBusqueda: string = '';
  productosSeleccionados: any[] = [];

  filtrarProductos() {
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }

  agregarProducto(producto: any) {
    this.productosSeleccionados.push(producto);
  }

}
