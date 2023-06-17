import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss']
})
export class CotizacionComponent implements OnInit {

  productos: any[] = [
    { id: 1, cantidad: 0, nombre: 'Producto 1', precio: 10 },
    { id: 2, cantidad: 0, nombre: 'Producto 2', precio: 20 },
    { id: 3, cantidad: 0, nombre: 'Producto 3', precio: 30 },
    { id: 4, cantidad: 0, nombre: 'Producto 4', precio: 40 },
    { id: 5, cantidad: 0, nombre: 'Producto 5', precio: 50 },
    { id: 6, cantidad: 0, nombre: 'Producto 6', precio: 10 },
    { id: 7, cantidad: 0, nombre: 'Producto 7', precio: 20 },
    { id: 8, cantidad: 0, nombre: 'Producto 8', precio: 30 },
    { id: 9, cantidad: 0, nombre: 'Producto 9', precio: 40 },
    { id: 10, cantidad: 0, nombre: 'Producto 10', precio: 50 },
    { id: 11, cantidad: 0, nombre: 'Producto 11', precio: 10 },
    { id: 12, cantidad: 0, nombre: 'Producto 12', precio: 20 },
    { id: 13, cantidad: 0, nombre: 'Producto 13', precio: 30 },
    { id: 14, cantidad: 0, nombre: 'Producto 14', precio: 40 },
    { id: 15, cantidad: 0, nombre: 'Producto 15', precio: 50 },
    { id: 16, cantidad: 0, nombre: 'Producto 16', precio: 10 },
    { id: 17, cantidad: 0, nombre: 'Producto 17', precio: 20 },
    { id: 18, cantidad: 0, nombre: 'Producto 18', precio: 30 },
    { id: 19, cantidad: 0, nombre: 'Producto 19', precio: 40 },
    { id: 210, cantidad: 0, nombre: 'Producto 20', precio: 50 }
  ];

  
  productosFiltrados: any[] = [];
  terminoBusqueda: string = '';
  productosSeleccionados: any[] = [];
  mostrarListaProductos: boolean = false;

  cantidadProductoModal: any[] = []

  precioTotal: number = 0;

  precioTotalUnitario: any;

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


  /* ===================================== */


  modelChanged( cantidad, id) {
    
  }

 

}
