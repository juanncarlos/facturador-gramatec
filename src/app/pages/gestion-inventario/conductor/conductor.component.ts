import { Component, OnInit, ViewChild } from '@angular/core';

// importar libreria para las alertas
import Swal from 'sweetalert2';

// importar librerias para usar modales de bootstrap
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

//importar librerias para exportar datos en excel
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// importamos la libreria para mandar a imprimir en a4 y ticket
import * as printJS from 'print-js';

import { ConductorService } from './conductor.service';
import { style } from '@angular/animations';

// importar para el uso del api reniec
import { NgForm } from '@angular/forms';
import { ApiReniecService } from '../api-reniec/apiReniec.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.scss']
})
export class ConductorComponent implements OnInit {

  public modalRef: NgbModalRef;
  public datos: any[];
  public nuevoDato: any = {};
  public datoEditado: any = {};
  public indiceEditar: number = -1;
  
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



 

  
  constructor(
    private modalService: NgbModal, 
    private dataService: ConductorService,
    private consultaService: ApiReniecService
    ) {}

  ngOnInit(): void {
    /* this.datos = this.dataService.obtenerDatos(); */ // forma normal 
    this.datos = this.dataService.obtenerDatos().sort((a, b) => b.id - a.id); //forma descendente
    this.form.type = 'dni';
  }

  abrirModal(modal: any): void {
    this.modalRef = this.modalService.open(modal, { centered: true });
  }

  cerrarModal(): void {
    this.modalRef.close();
    this.indiceEditar = -1;
    this.datoEditado = {};
    this.nuevoDato = {};
    this.form.nombre_completo = '';
    this.form.number = '';
    this.form.direccion = '';
    this.errorMessage = ''; // Agregar esta línea
    this.showNoResultsMessage = false; // Agregar esta línea
  }

  //*****esto es para ordenar de manera descendente y con validacion del primer campo 
  
  agregarDato(): void {

    if (this.form.type === 'dni' && this.form.number.length !== 8 ) {
        this.errorMessage = `Ingrese 8 dígitos para el DNI`;
        return;
    }

    if (this.form.type && this.form.number && this.form.nombre_completo && this.form.direccion && this.nuevoDato.licencia && this.nuevoDato.categoria) {
      
      // Verificar si el usuario ya existe
      const userExists = this.datos.find(user => user.dni === this.form.number);

      if (userExists) {
        /* alert('El usuario ya existe.'); */
        // Alerta de advertencia
        Swal.fire('Advertencia', 'El conductor ya existe.', 'warning');
        return;
      }
      this.nuevoDato.dni = this.form.number;
      this.nuevoDato.nombre = this.form.nombre_completo;
      this.nuevoDato.direccion = this.form.direccion;
      this.dataService.agregarDato(this.nuevoDato);
      
      this.cerrarModal();
      this.nuevoDato = {};
      this.form.nombre_completo = '';
      this.form.number = '';
      this.form.direccion = '';
      // Mostrar alerta de éxito en una sola línea
      Swal.fire('Éxito', 'Conductor agregado correctamente.', 'success');
    } else {
      // Campo obligatorio vacío, muestra un mensaje de error o realiza alguna acción adicional
      /* alert('Ingrese los campos obligatorios que aparecen con el símbolo * '); */
      Swal.fire('Advertencia', 'Llene los campos obligatorios que aparecen con el símbolo *.', 'warning');
    }
  }

  editarDato(): void {
    if (this.datoEditado.dni && this.datoEditado.nombre && this.datoEditado.direccion && this.datoEditado.licencia && this.datoEditado.categoria) {
    this.dataService.editarDato(this.datos[this.indiceEditar].id, this.datoEditado);
    this.datos = this.dataService.obtenerDatos();
    Swal.fire('Éxito', 'Conductor editado correctamente.', 'success');
    this.cerrarModal();
    }else {
      // Campo obligatorio vacío, muestra un mensaje de error o realiza alguna acción adicional
      /* alert('El campo dni no puede ir vacio, por favor complete.'); */
      Swal.fire('Advertencia', 'Llene los campos obligatorios que aparecen con el símbolo *.', 'warning');
    }

   
  }

  eliminarDato(index: number): void {

    // Alerta de pregunta con confirmación
    Swal.fire({
      title: '¿Estás seguro de eliminar?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes ejecutar la acción que sigue después de confirmar
        const dato = this.datos[index];
        this.dataService.eliminarDato(dato.id);
        this.datos = this.dataService.obtenerDatos();
        Swal.fire('Eliminado', 'El conductor ha sido eliminado exitosamente.', 'success');
      }
    });
    
    
    

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


  //* ********* código para importar archivos en excel ******************






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
      <h1 style="text-align: center">Datos de los conductores</h1>
      <table>
        <tr>
          <th>DNI</th>
          <th>NOMBRE</th>
          <th>LICENCIA</th>
          <th>VENCIMIENTO LICENCIA</th>
          <th>CATEGORIA</th>
          <th>CELULAR</th>
        </tr>
    `;
  
    for (const fila of exportData) {
      contenido += `
        <tr>
          <td>${fila.dni}</td>
          <td>${fila.nombre}</td>
          <td>${fila.licencia}</td>
          <td>${fila.fechaVencLicencia}</td>
          <td>${fila.categoria}</td>
          <td>${fila.celular}</td>
        </tr>
      `;
    }
  
    contenido += `</table>`;
  
    printJS({ printable: contenido, type: 'raw-html', showModal: true, style: '@page { size: A4; margin: 0; }'});
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
      this.form.nombre_completo = '';
      this.form.direccion = '';
      this.showNoResultsMessage = false;

      
    } /* else if (this.form.type === 'ruc' && this.form.number.length !== minLengthRUC) {
      errorMessage = `Ingrese ${minLengthRUC} dígitos para el RUC`;
      this.showNoResultsMessage = false;
      
    } */

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
              

            } /* else if (this.form.type === 'ruc') {
              this.form.nombre_completo = this.dato.nombre_o_razon_social;
              this.form.direccion = this.dato.direccion_completa;
              this.form.activo = this.dato.estado;
              this.form.habido = this.dato.condicion;
              this.showNoResultsMessage = false;
              
            } */
          }else {
            this.dato = {}; // Limpiar datos si no se encontraron
            this.form.nombre_completo = '';
            this.form.direccion = '';
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
  
}
