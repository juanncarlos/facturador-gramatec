import { Component, OnInit } from '@angular/core';
import { Producto02Service } from '../../gestion-inventario/producto02/producto02.service';
import { ClienteService } from '../../gestion-inventario/cliente/cliente.service';




declare var $: any; // Declaración para que TypeScript reconozca '$'

@Component({
  selector: 'app-cotizacion-detalle',
  templateUrl: './cotizacion-detalle.component.html',
  styleUrls: ['./cotizacion-detalle.component.scss']
})
export class CotizacionDetalleComponent implements OnInit {

  

  //* variables para traer los datos del servicio producto
  productos: any[] = [];
  productosFiltrados: any[] = [];
  terminoBusqueda: string = '';
  productosSeleccionados: any[] = [];
  mostrarListaProductos: boolean = false;
  cantidadProductoModal: any[] = []
  precioTotal: number = 0;
  precioTotalUnitario: any;

  //* variables para traer los datos del servicio cliente
  clientes: any[] = [];
  clientesFiltrados: any[] = [];
  clientesterminoBusqueda: string = '';
  clientesSeleccionados: any[] = [{id: 1, nombre: '', direccion: ''}];
  mostrarListaClientes: boolean = false;

  clienteSeleccionado: any = {nombre: '', direccion: ''};



  
  constructor(
    private producto02Service: Producto02Service,
    private clienteService: ClienteService
    ) { }

  ngOnInit(): void {
    /* this.datos = this.dataService.obtenerDatos(); */ // forma normal 
    this.productos = this.producto02Service.obtenerDatos().sort((a, b) => b.id - a.id); //forma descendente

    //* traer datos del servicio cliente
    this.clientes = this.clienteService.obtenerDatos().sort((a, b)=> b.id - a.id);
  }

  //********* codigo para hacer el filtro de los productos *************************************************
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
  
  //código para que no se pueda repetir el mismo producto al darle click
  productoYaSeleccionado(producto: any): boolean {
    return this.productosSeleccionados.some(item => item.id === producto.id);
  }


  //*********** código para buscar el clientes en el modal y agregar **********************
  filtrarClientes() {
    this.clientesFiltrados = this.clientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(this.clientesterminoBusqueda.toLowerCase())
    );
  }

  limpiarFiltroCliente() {
    setTimeout(() => {
      this.clientesFiltrados = [];
    }, 200);
  }

  agregarCliente(cliente: any) {
    
      this.clientesSeleccionados.push(cliente);
      this.clienteSeleccionado = cliente;
      this.clientesterminoBusqueda = '';
      this.mostrarListaClientes = false; 
    
  }


  dniRucInput: number;

  buscarClientePorDniRuc() {
      const dniRuc = this.dniRucInput;
      if (dniRuc) {
          const clienteEncontrado = this.clientes.find(cliente => cliente.numeroDocumento === dniRuc);
          if (clienteEncontrado) {
              this.clienteSeleccionado = clienteEncontrado;
          } else {
              this.clienteSeleccionado = {nombre: '', direccion: ''};
              
          }
      } else {
          this.clienteSeleccionado = {nombre: '', direccion: ''};
      }
  }
  

     



  //********************** */ código para abrir modal ****************************************************************
  abrirModalProductos() {
    // Abre el modal de Bootstrap
    $('#modalProductos').modal('show');
  }



}
