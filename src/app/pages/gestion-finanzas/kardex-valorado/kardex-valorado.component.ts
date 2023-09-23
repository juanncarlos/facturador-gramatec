import { Component, OnInit } from '@angular/core';

//importar librerias para exportar datos en excel
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


// importamos la libreria para mandar a imprimir en a4 y ticket
import * as printJS from 'print-js';

import { KardexValoradoService } from './kardex-valorado.service';

@Component({
  selector: 'app-kardex-valorado',
  templateUrl: './kardex-valorado.component.html',
  styleUrls: ['./kardex-valorado.component.scss']
})
export class KardexValoradoComponent implements OnInit {

  public kardexValorado: any[];

    // Propiedades de paginación
    public paginaActual = 1;
    public elementosPorPagina = 6;

  // variable del buscador de la lista de productos
  public textoBusqueda: string = '';

  // variable para ver en cuadrilla o listas
  public type:string = 'list';

  // variables para mostrar texto al pasar el mouse sobre el botones
  MensajeAgregar: boolean = false;
  MensajeExportarExcel: boolean = false;
  MensajeExportarPdf: boolean = false;
  MensajeVistaCuadros: boolean = false;
  MensajeVistaListas: boolean = false;
  MensajeBuscarCliente: boolean = false;

  constructor( private kardexValoradoService: KardexValoradoService) { }

  ngOnInit(): void {
    this.kardexValorado = this.kardexValoradoService.obtenerKardexValorado().sort((a, b) => b.id - a.id); //forma descendente
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
  // ************** codigo para exportar según los filtros que se hagan **********************
  exportToExcels(): void {
    let exportData: any[];
  
    if (this.textoBusqueda.trim() !== '') {
      // Realizar la búsqueda y exportar los datos filtrados
      exportData = this.kardexValorado.filter(item => {
        // Aplica la lógica de filtrado según tus criterios de búsqueda
        // Por ejemplo, si deseas exportar solo los elementos cuyo campo "nombre" contiene el texto buscado:
        return item.producto.includes(this.textoBusqueda);
      });
    } else {
      // Exportar todos los datos
      exportData = this.kardexValorado;
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
    saveAs(excelFile, 'kardexValorado.xlsx');
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

  if (this.textoBusqueda.trim() !== '') {
    // Realizar la búsqueda y exportar los datos filtrados
    exportData = this.kardexValorado.filter(item => {
      // Aplica la lógica de filtrado según tus criterios de búsqueda
      // Por ejemplo, si deseas exportar solo los elementos cuyo campo "nombre" contiene el texto buscado:
      return item.producto.includes(this.textoBusqueda);
    });
  } else {
    // Exportar todos los datos
    exportData = this.kardexValorado;
  }
  let contenido = `
    <h1 style="text-align: center">Kardex Valorado</h1>
    <table>
      <tr>
        <th>Stock</th>
        <th>Producto</th>
        <th>P.C</th>
        <th>Total P.C</th>
        <th>Celular</th>
        <th>P.V</th>
        <th>Total P.V</th>
        <th>Categoria</th>
    </tr>
      </tr>
  `;

  for (const fila of exportData) {
    contenido += `
      <tr>
        <td>${fila.stock}</td>
        <td>${fila.producto}</td>
        <td>${fila.precioCompra}</td>
        <td>${fila.totalPC}</td>
        <td>${fila.celular}</td>
        <td>${fila.precioVenta}</td>
        <td>${fila.totalPV}</td>
        <td>${fila.categoria}</td>
      </tr>
    `;
  }

  contenido += `</table>`;

  printJS({ printable: contenido, type: 'raw-html', showModal: true, style: '@page { size: A4; margin: 0; }' });
}

}
