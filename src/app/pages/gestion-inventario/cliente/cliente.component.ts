import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// importar librerias para usar modales de bootstrap
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

//importar librerias para exportar datos en excel
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


// importamos la libreria para mandar a imprimir en a4 y ticket
import * as printJS from 'print-js';


import { ClienteService } from './cliente.service';

// importar para el uso del api reniec
import { NgForm } from '@angular/forms';
import { ApiReniecService } from '../api-reniec/apiReniec.service';

// importar el ubigeo
import { ubigeo } from './cliente.data';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {


  public modalRef: NgbModalRef;
  public datos: any[];
  public nuevoDato: any = {};
  public datoEditado: any = {};
  public indiceEditar: number = -1;

  // data de ubigeo
  public ubigeoData = ubigeo; // Asigna el array ubigeo importado
  
  // Propiedades de paginación
  public paginaActual = 1;
  public elementosPorPagina = 6;
  
  // variable del buscador
  public textoBusqueda: string = '';
  
  //ordenar de manera descendente
  public ordenDescendente: boolean = true;
  
  // variable para ver en cuadrilla o listas
  public type:string = 'list';
  
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


  // deshabilitar boton guardar
  deshabilitado: boolean = false;
 

  
  constructor(
    private modalService: NgbModal, 
    private dataService: ClienteService,
    private consultaService: ApiReniecService
    ) {}

  ngOnInit(): void {
    /* this.datos = this.dataService.obtenerDatos(); */ // forma normal 
    this.datos = this.dataService.obtenerDatos().sort((a, b) => b.id - a.id); //forma descendente

    
  }

  abrirModal(modal: any): void {
    this.modalRef = this.modalService.open(modal, { centered: true });
  }

  cerrarModal(): void {
    this.modalRef.close();
    this.indiceEditar = -1;
    this.datoEditado = {};
  }

  // este es para ordenar de manera ascendente
  /* agregarDato(): void {
    this.dataService.agregarDato(this.nuevoDato);
    this.datos = this.dataService.obtenerDatos();
    this.cerrarModal();
    this.nuevoDato = {};
  } */

  //esto es para ordenar de manera descendente y con validacion del primer campo 

  
  
  
  /* agregarDato(): void {
      
      if (this.nuevoDato.nombre && this.nuevoDato.tipoDocumento && this.nuevoDato.numeroDocumento && this.nuevoDato.direccion) {
        this.dataService.agregarDato(this.nuevoDato);
        this.cerrarModal();
        this.nuevoDato = {};
        
      } else {
        
        alert('Por favor complete los campos obligatorios que aparecen con un símbolo *.');
      }
    
  } */

  
  agregarDato(): void {



    if (this.form.type === 'otroDocumento' && this.form.number.length !== 8 || this.form.type === 'dni' && this.form.number.length !== 8 || this.form.type === 'ruc' && this.form.number.length !== 11 ) {
      if(this.form.type === 'otroDocumento') {
        this.errorMessage = `El campo Número debe tener 8 dígitos`;
      } else if(this.form.type === 'dni'){
        this.errorMessage = `Ingrese 8 dígitos para el DNI`;
      }
      else if(this.form.type === 'ruc'){
        this.errorMessage = `Ingrese 11 dígitos para el RUC`;
      }
      return;
    }

      
    if (this.form.type && this.form.number && this.form.nombre_completo && this.form.direccion) {
      this.nuevoDato.nombre = this.form.nombre_completo;
      this.nuevoDato.tipoDocumento = this.form.type;
      this.nuevoDato.numeroDocumento = this.form.number;
      this.nuevoDato.direccion = this.form.direccion;
      this.nuevoDato.activo = this.form.activo;
      this.nuevoDato.habido = this.form.habido;
      this.dataService.agregarDato(this.nuevoDato);
      
      this.cerrarModal();
      this.nuevoDato = {};
      this.form.nombre_completo = '';
      this.form.type = '';
      this.form.number = '';
      this.form.direccion = '';
      this.form.activo = '';
      this.form.habido = '';
      this.errorMessage = '';
      
    } else {
      
      alert('Por favor complete los campos obligatorios que aparecen con un símbolo *.');
    }
  
}

  editarDato(): void {
    if (this.datoEditado.nombre) {
    this.dataService.editarDato(this.datos[this.indiceEditar].id, this.datoEditado);
    this.datos = this.dataService.obtenerDatos();
    this.cerrarModal();
    }else {
      // Campo obligatorio vacío, muestra un mensaje de error o realiza alguna acción adicional
      alert('El campo placa no puede ir vacio, por favor complete.');
    }

   
  }

  eliminarDato(index: number): void {
    const dato = this.datos[index];
    this.dataService.eliminarDato(dato.id);
    this.datos = this.dataService.obtenerDatos();
  }

  abrirEditarModal(modal: any, indice: number): void {
    this.indiceEditar = indice;
    this.datoEditado = { ...this.datos[indice] };
    this.modalRef = this.modalService.open(modal, { centered: true });
  }

  /* paginacion */
  cambiarPagina(evento: number): void {
    this.paginaActual = evento;
  }

  //codigo para ver en cuadrillas o listas
  public toggle(type){
    this.type = type;
  }


  // ************** codigo para exportar según los filtros que se hagan **********************
  exportToExcels(): void {
    let exportData: any[];
  
    if (this.textoBusqueda.trim() !== '') {
      // Realizar la búsqueda y exportar los datos filtrados
      exportData = this.datos.filter(item => {
        // Aplica la lógica de filtrado según tus criterios de búsqueda
        // Por ejemplo, si deseas exportar solo los elementos cuyo campo "nombre" contiene el texto buscado:
        return item.nombre.includes(this.textoBusqueda);
      });
    } else {
      // Exportar todos los datos
      exportData = this.datos;
    }
  
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
          <th>Tipo Documento</th>
          <th>Número</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Celular</th>
        </tr>
        <tr>
          <td>${fila.tipoDocumento}</td>
          <td>${fila.numeroDocumento}</td>
          <td>${fila.nombre}</td>
          <td>${fila.direccion}</td>
          <td>${fila.celular}</td>
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



  //****código para descargar en pdf segun la busqueda que se haga globalmente */
  
  exportarPDF() {
    let exportData: any[];
  
    if (this.textoBusqueda.trim() !== '') {
      // Realizar la búsqueda y exportar los datos filtrados
      exportData = this.datos.filter(item => {
        // Aplica la lógica de filtrado según tus criterios de búsqueda
        // Por ejemplo, si deseas exportar solo los elementos cuyo campo "nombre" contiene el texto buscado:
        return item.nombre.includes(this.textoBusqueda);
      });
    } else {
      // Exportar todos los datos
      exportData = this.datos;
    }
    let contenido = `
      <h1 style="text-align: center">Datos del Cliente</h1>
      <table>
        <tr>
          <th>Tipo Documento</th>
          <th>Número</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Celular</th>
      </tr>
        </tr>
    `;
  
    for (const fila of exportData) {
      contenido += `
        <tr>
          <td>${fila.tipoDocumento}</td>
          <td>${fila.numeroDocumento}</td>
          <td>${fila.nombre}</td>
          <td>${fila.direccion}</td>
          <td>${fila.celular}</td>
        </tr>
      `;
    }
  
    contenido += `</table>`;
  
    printJS({ printable: contenido, type: 'raw-html', showModal: true, style: '@page { size: A4; margin: 0; }' });
  }




  //***** */ código para usar la api reniec  **********************************************

  @ViewChild('myForm') myForm!: NgForm;

  public btn_load: boolean = false;
  public form: any = { type: '', number: '' };
  public dato: any = {};
  public errorMessage: string = ''; // Agregar esta línea
  public showNoResultsMessage: boolean = false; // Agregar esta línea
  

  changeDocumentType() {
    this.clearFormFields(); // Limpia los campos cuando cambia el tipo de documento
    this.clearMessages(); // Limpia los mensajes de advertencia
  }

  get_users() {
    this.btn_load = true;

    const minLengthDNI = 8;
    const minLengthRUC = 11;
    let errorMessage = '';

    if (this.form.type === 'dni' && this.form.number.length !== minLengthDNI) {
      errorMessage = `Ingrese ${minLengthDNI} dígitos para el DNI`;
      this.showNoResultsMessage = false;
      
    } else if (this.form.type === 'ruc' && this.form.number.length !== minLengthRUC) {
      errorMessage = `Ingrese ${minLengthRUC} dígitos para el RUC`;
      this.showNoResultsMessage = false;
      
    }

    if (errorMessage) {
      this.errorMessage = errorMessage;
      this.btn_load = false;
      return; // No continuar con la búsqueda
    }

    this.errorMessage = ''; // Limpiar el mensaje de error si no hubo errores

    this.consultaService
      .list_users(this.form.type, this.form.number)
      .subscribe({
        next: (res) => {
          this.btn_load = false;
          this.dato = res.data;
          if (this.dato) {

            if (this.form.type === 'dni') {
              this.form.nombre_completo = this.dato.nombre_completo;
              this.form.direccion = this.dato.direccion_completa;
              this.showNoResultsMessage = false;
              

            } else if (this.form.type === 'ruc') {
              this.form.nombre_completo = this.dato.nombre_o_razon_social;
              this.form.direccion = this.dato.direccion_completa;
              this.form.activo = this.dato.estado;
              this.form.habido = this.dato.condicion;
              this.showNoResultsMessage = false;
              
            }
          }else {
            this.dato = {}; // Limpiar datos si no se encontraron
            this.form.nombre_completo = '';
            this.form.direccion = '';
            this.form.activo = '';
            this.form.habido = '';
            this.showNoResultsMessage = true; // Mostrar mensaje de no encontrados
          }
        },
        error: () => {
          this.btn_load = false;
          this.showNoResultsMessage = false; // Ocultar mensaje de no encontrados en caso de error
      
        },
      });
  }

  clearFormFields() {
    this.form.nombre_completo = '';
    this.form.direccion = '';
    this.form.number = ''; // Limpia el número de documento
    this.form.habido = '';
    this.form.activo = ''; 
  }

  clearMessages() {
    this.errorMessage = '';
    this.showNoResultsMessage = false // Agrega esta función para limpiar el mensaje de error
  }

  clearAPI() {
    this.dato = {};
    
  }

  clearFORM() {
    this.form = { type: '', number: '' };
  }

  register() {
    //console.log(this.form);
    const name = `${this.form.nombre_completo} ${this.form.apellido_paterno} ${this.form.apellido_materno}`;
    /* Swal.fire('HOLAss', name, 'success'); */
  }

  // código para validar el ingreso solo de numero y no texto a un input de tipo text
  validarInput(event: KeyboardEvent) {
    const inputChar = event.key;

    // Verificar si el carácter ingresado es numérico o una tecla especial permitida
    if (!/^\d$|Backspace|Delete|ArrowLeft|ArrowRight|Tab$/.test(inputChar)) {
        event.preventDefault();
    }
}


  //* codigo para filtrar los datos de departamento, provincia y distrito según la data que se tiene 

  /* selectedDepartamento: string = '';
  selectedProvincia: string = '';
  selectedDistrito: string = '';


  getUniqueDepartamentos() {
    return Array.from(new Set(this.ubigeoData.map(item => item.departamento)));
  }
  
  getUniqueProvincias() {
    const provincias = this.ubigeoData
      .filter(item => item.departamento === this.selectedDepartamento)
      .map(item => item.provincia);
  
    return Array.from(new Set(provincias));
  }
  
  getUniqueDistritos() {
    const distritos = this.ubigeoData
      .filter(item => item.departamento === this.selectedDepartamento && item.provincia === this.selectedProvincia)
      .map(item => item.distrito);
  
    return Array.from(new Set(distritos));
  } */

  
  

}
