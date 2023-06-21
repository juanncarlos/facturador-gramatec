import { Component, OnInit } from '@angular/core';

// importar librerias para usar modales de bootstrap
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

//importar librerias para exportar datos en excel
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// importar librerias para descargar en PDF
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

import { VehiculoService } from './vehiculo.service';



@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {
  
  
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
    

  
  constructor(private modalService: NgbModal, private dataService: VehiculoService) {}

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

  //* codigo para exportar datos en un archivo excel 
 /*  exportToExcel(): void {
    const data: any[] = this.datos; // Obtén los datos que deseas exportar
  
    // Crea una nueva instancia de workbook
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
  
    // Convierte los datos a una hoja de cálculo
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  
    // Agrega la hoja de cálculo al workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
  
    // Genera un archivo Excel binario
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
    // Guarda el archivo Excel en el sistema de archivos del usuario
    const excelFile: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(excelFile, 'datos.xlsx');
  } */



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
  generarPDF(fila: any): void {
    const documentDefinition = {
      content: [
        { text: 'Datos del Vehículo', style: 'header' },
        { text: '\n' },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*','*', '*', '*'],
            body: [
              ['Placa', 'Marca', 'Tipo Vehículo', 'MTC', 'Configuración', 'Capacidad Carga'], // Encabezados de la tabla
              [fila.nombre, fila.marca, fila.tipoVehiculo, fila.mtc, fila.configuracion, fila.capCarga] // Datos de la fila
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        }
      }
    };
  
    pdfMake.createPdf(documentDefinition).download('datos_vehiculo.pdf');
  }
  

  
  
  
}

