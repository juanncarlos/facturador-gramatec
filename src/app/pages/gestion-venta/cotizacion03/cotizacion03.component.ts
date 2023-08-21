import { Component, OnInit } from '@angular/core';

// importar librerias para usar modales de bootstrap
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

//importar librerias para exportar datos en excel
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


// importamos la libreria para mandar a imprimir en a4 y ticket
import * as printJS from 'print-js';


import { Contizacion03Service } from './contizacion03.service';
import { Producto02Service } from '../../gestion-inventario/producto02/producto02.service';
import { MarcaService } from '../../gestion-inventario/producto02/marca.service';
import { ClienteService } from '../../gestion-inventario/cliente/cliente.service';



declare var $: any; // Declaración para que TypeScript reconozca '$'

@Component({
  selector: 'app-cotizacion03',
  templateUrl: './cotizacion03.component.html',
  styleUrls: ['./cotizacion03.component.scss']
})
export class Cotizacion03Component  {

  public modalRef: NgbModalRef;

  public datos: any[];
  public nuevoDato: any = {};
  public datoEditado: any = {};
  public indiceEditar: number = -1;
  
  // Propiedades de paginación
  public paginaActual = 1;
  public elementosPorPagina = 6;
  
  // variable del buscador de la lista de productos
  public textoBusqueda: string = '';

  // variable para el buscador del modal marcas
  public marcaBusqueda: string = '';

  // variable para el buscador del modal categorias
  public categoriaBusqueda: string = '';
  
  //ordenar de manera descendente
  public ordenDescendente: boolean = true;
  
  // variable para ver en cuadrilla o listas
  public type:string = 'grid';
  
  // variable para poder importar archivos
  public datosImportados: any[] = [];
  public importedIds: number[] = [];


  // variables para mostrar texto al pasar el mouse sobre el botones
  MensajeAgregar: boolean = false;
  MensajeExportarExcel: boolean = false;
  MensajeExportarPdf: boolean = false;
  MensajeVistaCuadros: boolean = false;
  MensajeVistaListas: boolean = false;
  MensajeBuscarCliente: boolean = false;
  
  // variable para los servicios de marca
  public marcas: any[];
  public nuevoMarca: any = {};

  //* variable para los servicios de cliente
  
  


  
  //* variables para traer los datos del servicio producto
  productos: any[] = [];
  productosFiltrados: any[] = [];
  terminoBusqueda: string = '';
  productosSeleccionados: any[] = [];
  mostrarListaProductos: boolean = false;
  cantidadProductoModal: any[] = []
  precioTotal: number = 0;
  precioTotalUnitario: any;

  //* variables para traer los datos del servicio cliente y agregar por nombre
  clientes: any[] = [];
  nuevoCliente: any = {};
  clientesFiltrados: any[] = [];
  clientesterminoBusqueda: string = '';
  clientesSeleccionados: any[] = [{id: 1, nombre: '', direccion: ''}];
  mostrarListaClientes: boolean = false;
  
  //* variables para traer los datos del servicio cliente y agregar por dni
  clienteSeleccionado: any = {nombre: '', direccion: ''};
  dniRucInput: string;


  //* variables para filtrar por fecha */
  fechaInicio: string = '';
  fechaFin: string = ''; 

  
  
  constructor(
    private modalService: NgbModal, 
    private dataService: Contizacion03Service,
    private producto02Service: Producto02Service,
    private clienteService: ClienteService,
    private marcaService: MarcaService
    ) 
      {
        // Inicializar las fechas con la fecha actual
        const today = new Date();
        this.fechaInicio = this.formatDate(today);
        this.fechaFin = this.formatDate(today);
      }

  ngOnInit(): void {
    /* this.datos = this.dataService.obtenerDatos(); */ // forma normal 
    this.datos = this.dataService.obtenerDatos().sort((a, b) => b.id - a.id); //forma descendente

    //* obtener datos de los productos 
    this.productos = this.producto02Service.obtenerDatos().sort((a, b) => b.id - a.id); //forma descendente

    //* codigo para traer datos del servicio de marca ************
    /* this.marcas = this.marcaService.obtenerMarcas(); */ //forma normal 
     this.marcas = this.marcaService.obtenerMarcas().sort((a, b) => b.id - a.id);  //forma descendente 

     //* traer datos del servicio cliente
    this.clientes = this.clienteService.obtenerDatos().sort((a, b)=> b.id - a.id);
    console.log(this.clientes);
   
    }

  abrirModal(modal: any, ancho: 'sm' | 'lg' | string): void {
    this.modalRef = this.modalService.open(modal, { centered: true, size: ancho });
  }

  cerrarModal(): void {
    this.modalRef.close();
    this.indiceEditar = -1;
    this.datoEditado = {};
  }

  //********************** */ código para abrir modal venta ****************************************************************
  abrirModalProductos() {
    // Abre el modal de Bootstrap
    $('#modalProductos').modal('show');
  }

//* código para abrir y cerrar el modal para agregar los clientes nuevos */
  abrirModalAgregarCliente() {
    // Abre el modal de Bootstrap
    $('#modalClientes').modal('show');
  }
  cerrarModalClientes() {
    // Cierra el modal de Bootstrap
    $('#modalClientes').modal('hide');
}


  // este es para ordenar de manera ascendente
  /* agregarDato(): void {
    this.dataService.agregarDato(this.nuevoDato);
    this.datos = this.dataService.obtenerDatos();
    this.cerrarModal();
    this.nuevoDato = {};
  } */

  //esto es para ordenar de manera descendente y con validacion del primer campo 
  
  agregarDato(): void {
    /* if (this.nuevoDato.nombre) { */
      this.dataService.agregarDato(this.nuevoDato);
      /* this.datos.unshift(this.nuevoDato); */
      this.cerrarModal();
      this.nuevoDato = {};
    /* } else { */
      // Campo obligatorio vacío, muestra un mensaje de error o realiza alguna acción adicional
     /*  alert('Por favor ingrese el nombre del producto.');
    } */
  }

  editarDato(): void {
    if (this.datoEditado.nombre) {
    this.dataService.editarDato(this.datos[this.indiceEditar].id, this.datoEditado);
    this.datos = this.dataService.obtenerDatos();
    this.cerrarModal();
    }else {
      // Campo obligatorio vacío, muestra un mensaje de error o realiza alguna acción adicional
      alert('El campo nombre del producto no puede ir vacio, por favor complete.');
    }
   
  }

  eliminarDato(index: number): void {
    const dato = this.datos[index];
    this.dataService.eliminarDato(dato.id);
    this.datos = this.dataService.obtenerDatos();
  }

  abrirEditarModal(modal: any, indice: number, ancho: 'sm' | 'lg' | string): void {
    this.indiceEditar = indice;
    this.datoEditado = { ...this.datos[indice] };
    this.modalRef = this.modalService.open(modal, { centered: true, size: ancho });
  }


  /* paginacion */
  cambiarPagina(evento: number): void {
    this.paginaActual = evento;
  }

  //codigo para ver en cuadrillas o listas
  public toggle(type){
    this.type = type;
  }


  // ************** codigo para exportar según los filtros que se hagan con fecha y nombre **********************
  exportToExcels(): void {
    let exportData: any[];

  // Filtrar los datos en base a los filtros activos
  exportData = this.datos.filter(dato => {
    const cumpleNombre = dato.clienteNombre.toLowerCase().includes(this.textoBusqueda.toLowerCase());
    const fechaDato = new Date(dato.fecha);

    const fechaInicioObj = this.fechaInicio ? new Date(this.fechaInicio) : null;
    const fechaFinObj = this.fechaFin ? new Date(this.fechaFin) : null;

    if (fechaInicioObj && fechaFinObj) {
      // Ajustar la fecha de fin para incluir todos los datos de ese día
      fechaFinObj.setDate(fechaFinObj.getDate() + 1);

      // Comprobar si la fecha del dato está dentro del rango
      return cumpleNombre && fechaDato >= fechaInicioObj && fechaDato < fechaFinObj;
    }

    return cumpleNombre;
  });

  // Crea una nueva instancia de workbook
  const workbook: XLSX.WorkBook = XLSX.utils.book_new();

  // Convierte los datos a una hoja de cálculo
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);

  // Agrega la hoja de cálculo al workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

  // Genera un archivo Excel binario
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

  // Guarda el archivo Excel en el sistema de archivos del usuario
  const excelFile: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(excelFile, 'datos.xlsx');
}


  // ****************** código para tener opciones de imprimir en A4 y ticket ******************
  imprimirA4(fila: any): void {

    const contenido = `

    <div>
    <img src="../../../../assets/img/logo/logo.jpg" alt="logo" width="50%">
    </div>
      <h1>Datos del Vehículo</h1>
      <table>
        <tr>
          <th>Placa</th>
          <th>Marca</th>
          <th>Tipo Vehículo</th>
          <th>MTC</th>
          <th>Configuración</th>
          <th>Cap. Carga</th>
        </tr>
        <tr>
          <td>${fila.nombre}</td>
          <td>${fila.marca}</td>
          <td>${fila.tipoVehiculo}</td>
          <td>${fila.mtc}</td>
          <td>${fila.configuracion}</td>
          <td>${fila.capCarga}</td>
        </tr>
      </table>
    `;

    printJS({ printable: contenido, type: 'raw-html', showModal: true, style: '@page { size: A4; margin: 0; }' });
  }

  imprimirTicket(fila: any): void {
    const contenido = `
      <h1>Ticket</h1>
      <p>Placa: ${fila.nombre}</p>
      <p>Marca: ${fila.marca}</p>
      <p>Tipo Vehículo: ${fila.tipoVehiculo}</p>
      <p>MTC: ${fila.mtc}</p>
      <p>Configuración: ${fila.configuracion}</p>
      <p>Cap. Carga: ${fila.capCarga}</p>
    `;

    printJS({ printable: contenido, type: 'raw-html', showModal: true, style: '@page { size: 80mm 200mm; margin: 0; }' });
  }



//******** código para descargar en pdf segun la busqueda que se haga globalmente ********************/
  
  exportarPDF() {
    let exportData: any[];

  // Filtrar los datos en base a los filtros activos
  exportData = this.datos.filter(dato => {
    const cumpleNombre = dato.clienteNombre.toLowerCase().includes(this.textoBusqueda.toLowerCase());
    const fechaDato = new Date(dato.fecha);

    const fechaInicioObj = this.fechaInicio ? new Date(this.fechaInicio) : null;
    const fechaFinObj = this.fechaFin ? new Date(this.fechaFin) : null;

    if (fechaInicioObj && fechaFinObj) {
      // Ajustar la fecha de fin para incluir todos los datos de ese día
      fechaFinObj.setDate(fechaFinObj.getDate() + 1);

      // Comprobar si la fecha del dato está dentro del rango
      return cumpleNombre && fechaDato >= fechaInicioObj && fechaDato < fechaFinObj;
    }

    return cumpleNombre;
  });
    let contenido = `
      <h1 style="text-align: center">Datos del Producto</h1>
      <table>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Marca</th>
          <th>Precio Compra</th>
          <th>Precio Venta</th>
        </tr>
    `;
  
    for (const fila of exportData) {
      contenido += `
        <tr>
          <td>${fila.codigoBarra}</td>
          <td>${fila.nombre}</td>
          <td>${fila.stock}</td>
          <td>${fila.marca}</td>
          <td>${fila.precioCompra}</td>
          <td>${fila.precioVenta}</td>
        </tr>
      `;
    }
  
    contenido += `</table>`;
  
    printJS({ printable: contenido, type: 'raw-html', showModal: true, style: '@page { size: A4; margin: 0; }' });
  }



 //Código para saber el total de la venta
  calcularTotalVenta(cotizacion: any): number {
  return this.dataService.calcularTotalVenta(cotizacion);
  }


//! =============== código para agregar los productos en el modal ===================================================
 
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



//*********** código para buscar el clientes en el modal y agregar por nombre **********************
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
    

//******* código para buscar el cliente en el modal y agregar por DNI o RUC**********************

      validarInput(event: KeyboardEvent) {
        const inputChar = event.key;
    
        // Verificar si el carácter ingresado es numérico o una tecla especial permitida
        if (!/^\d$|Backspace|Delete|ArrowLeft|ArrowRight|Tab$/.test(inputChar)) {
            event.preventDefault();
        }
    }
    
    isDniRucInvalid(): boolean {
        if (this.dniRucInput) {
            const dniRuc = this.dniRucInput.replace(/\D/g, ''); // Eliminar caracteres no numéricos
            return dniRuc.length !== 8 && dniRuc.length !== 11;
        }
        return false;
    }
      
      buscarClientePorDniRuc() {
          if (!this.isDniRucInvalid()) {
              const dniRuc = this.dniRucInput.replace(/\D/g, ''); // Eliminar caracteres no numéricos
              const clienteEncontrado = this.clientes.find(cliente => cliente.numeroDocumento === +dniRuc);
              if (clienteEncontrado) {
                  this.clienteSeleccionado = clienteEncontrado;
                  this.dniRucInput = '';
              } else {
                  this.clienteSeleccionado = {nombre: '', direccion: ''};
                  alert('El cliente no existe. Será mejor que lo agregue');
              }
          } else {
              this.clienteSeleccionado = {nombre: '', direccion: ''};
              alert('por favor ingrese la cantidad de los digitos correctos !!!');
          }
      }


//** código para establecer la fecha actual a las fechas de inicio y fecha de fin */
    private formatDate(date: Date): string {
      const day = date.getDate();
      const month = date.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
      const year = date.getFullYear();
  
      return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    }

//??????????????????? CÓDIGO PARA EL MODAL DE AGREGAR CLIENTE ????????????????????????????????
//** codigo para agregar cliente en el modal */
botonAgregarClienteModal(): void {
      
  if (this.nuevoCliente.nombre && this.nuevoCliente.tipoDocumento && this.nuevoCliente.numeroDocumento && this.nuevoCliente.direccion && this.nuevoCliente.departamento && this.nuevoCliente.provincia && this.nuevoCliente.distrito) {
    this.clienteService.agregarDato(this.nuevoCliente);
    this.cerrarModalClientes()
    this.nuevoCliente = {};
  } else {
    // Campo obligatorio vacío, muestra un mensaje de error o realiza alguna acción adicional
    alert('Por favor complete los campos obligatorios que aparecen con un símbolo *.');
  }

}



  

}
