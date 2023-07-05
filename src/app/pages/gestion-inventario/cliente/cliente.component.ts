import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// importar librerias para usar modales de bootstrap
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

//importar librerias para exportar datos en excel
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


// importamos la libreria para mandar a imprimir en a4 y ticket
import * as printJS from 'print-js';


import { ClienteService } from './cliente.service';

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
 

  
  constructor(private modalService: NgbModal, private dataService: ClienteService) {}

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
  
  agregarDato(): void {
      
      if (this.nuevoDato.nombre) {
        this.dataService.agregarDato(this.nuevoDato);
        this.datos.unshift(this.nuevoDato);
        this.cerrarModal();
        this.nuevoDato = {};
      } else {
        // Campo obligatorio vacío, muestra un mensaje de error o realiza alguna acción adicional
        alert('Por favor ingrese la placa.');
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


  //* ********* código para importar archivos en excel ******************






  //* *********** código para descargar en pdf ***************************
 


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
      <h1 class="text-center">Datos del Vehículo</h1>
      <table>
        <tr>
          <th>Placa</th>
          <th>Marca</th>
          <th>Tipo Vehículo</th>
          <th>MTC</th>
          <th>Configuración</th>
          <th>Cap. Carga</th>
        </tr>
    `;
  
    for (const fila of exportData) {
      contenido += `
        <tr>
          <td>${fila.nombre}</td>
          <td>${fila.marca}</td>
          <td>${fila.tipoVehiculo}</td>
          <td>${fila.mtc}</td>
          <td>${fila.configuracion}</td>
          <td>${fila.capCarga}</td>
        </tr>
      `;
    }
  
    contenido += `</table>`;
  
    printJS({ printable: contenido, type: 'raw-html', showModal: true, style: '@page { size: A4; margin: 0; }' });
  }




    


  

}
