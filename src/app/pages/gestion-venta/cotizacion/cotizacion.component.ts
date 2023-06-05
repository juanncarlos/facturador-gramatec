import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss']
})
export class CotizacionComponent implements OnInit {

  /* productos: any[] = [
    { id: 1, cantidad: 0, nombre: 'Producto 1', precio: 10 },
    { id: 2, cantidad: 0, nombre: 'Producto 2', precio: 20 },
    { id: 3, cantidad: 0, nombre: 'Producto 3', precio: 30 },
    { id: 4, cantidad: 0, nombre: 'Producto 4', precio: 40 },
    { id: 5, cantidad: 0, nombre: 'Producto 5', precio: 50 },
    { id: 6, cantidad: 0, nombre: 'Producto 6', precio: 10 },
    { id: 7, cantidad: 0, nombre: 'Producto 7', precio: 20 },
    { id: 8, cantidad: 0, nombre: 'Producto 8', precio: 30 },
    { id: 9, cantidad: 0, nombre: 'Producto 9', precio: 40 },
    { id: 10, cantidad: 0, nombre: 'Producto 10', precio: 50 }
  ]; */

  productos: any[] = [
    { nombre: 'Producto 1', cantidad: 0, precio: 10 },
    { nombre: 'Producto 2', cantidad: 0, precio: 20 },
    { nombre: 'Producto 3', cantidad: 0, precio: 30 },
    // ...
  ];
  cantidadTotal: number = 0;

  getTotalVenta() {
    let total = 0;
    for (let producto of this.productos) {
      total += producto.cantidad * producto.precio;
    }
    return total;
  }

  
  productosFiltrados: any[] = [];
  terminoBusqueda: string = '';
  productosSeleccionados: any[] = [];
  mostrarListaProductos: boolean = false;
  cantidadProductoModal: number[] = []

  precioTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  
  filtrarProductos() {
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }

  clearFilter() {
    setTimeout(() => {
      this.productosFiltrados = [];
    }, 200);
  }

  agregarProducto(producto: any) {
    if (!this.productoYaSeleccionado(producto)) {
      this.productosSeleccionados.push(producto);
      
    }
    
    this.terminoBusqueda = '';
    this.mostrarListaProductos = false;
    
  }
   
  eliminarProducto(producto: any) {
    const index = this.productosSeleccionados.indexOf(producto);
    if (index > -1) {
      this.productosSeleccionados.splice(index, 1);
    }
  }

  productoYaSeleccionado(producto: any): boolean {
    return this.productosSeleccionados.some(item => item.id === producto.id);
  }


  


}
