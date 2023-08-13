import { Component, OnInit } from '@angular/core';
import { Producto02Service } from '../../gestion-inventario/producto02/producto02.service';
import { CotizacionDetalle, DetalleService } from './detalle.service';


declare var $: any; // Declaración para que TypeScript reconozca '$'

@Component({
  selector: 'app-consulta-farvet',
  templateUrl: './consulta-farvet.component.html',
  styleUrls: ['./consulta-farvet.component.scss']
})
export class ConsultaFarvetComponent implements OnInit {

    
  productos: any[] = [];
  productosFiltrados: any[] = [];
  terminoBusqueda: string = '';
  productosSeleccionados: any[] = [];
  mostrarListaProductos: boolean = false;



  constructor(
    private productoService: Producto02Service,
    private detalleService: DetalleService
    ) { }

  ngOnInit(): void {
    this.productos = this.productoService.obtenerDatos();
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



  abrirModalProductos() {
    // Abre el modal de Bootstrap
    $('#modalProductos').modal('show');
  }

  seleccionarProducto(producto: any) {
    this.agregarProducto(producto);
    // Cierra el modal de Bootstrap
    $('#modalProductos').modal('hide');
  }



  //* codigo del servicio detalle *****
  agregarDetalle(detalle: CotizacionDetalle) {
    this.detalleService.agregarDetalle(detalle);
  }

  editarDetalle(index: number, detalle: CotizacionDetalle) {
    this.detalleService.editarDetalle(index, detalle);
  }

  eliminarDetalle(index: number) {
    this.detalleService.eliminarDetalle(index);
  }

  obtenerDetalles() {
    return this.detalleService.obtenerDetalles();
  }

}
