import { Component, OnInit } from '@angular/core';

import { GanaciaService } from './ganacia.service'

//importar librerias para exportar datos en excel
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


// importamos la libreria para mandar a imprimir en a4 y ticket
import * as printJS from 'print-js';

@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.scss']
})
export class GananciasComponent implements OnInit {


  public ganancias: any[];

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

  //* variables para filtrar por fecha */
  fechaInicio: string = '';
  fechaFin: string = ''; 

  constructor( private gananciaService: GanaciaService) {
    const today = new Date();
    this.fechaInicio = this.formatDate(today);
    this.fechaFin = this.formatDate(today);
   }

  ngOnInit(): void {
    this.ganancias = this.gananciaService.obtenerGanancias().sort((a, b) => b.id - a.id); //forma descendente
  }

  //** código para establecer la fecha actual a las fechas de inicio y fecha de fin */
  private formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    const year = date.getFullYear();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
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
  exportData = this.ganancias.filter(dato => {
    const cumpleNombre = dato.producto.toLowerCase().includes(this.textoBusqueda.toLowerCase());
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
  saveAs(excelFile, 'ganancias.xlsx');
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
  exportData = this.ganancias.filter(dato => {
    const cumpleNombre = dato.producto.toLowerCase().includes(this.textoBusqueda.toLowerCase());
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
      <h1 style="text-align: center">Ganancias</h1>
      <table>
        <tr>
          <th>Fecha</th>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio Compra</th>
          <th>Precio Venta</th>
          <th>Ganancia</th>
        </tr>
    `;
  
    for (const fila of exportData) {
      contenido += `
        <tr>
          <td>${fila.fecha}</td>
          <td>${fila.cantidad}</td>
          <td>${fila.producto}</td>
          <td>${fila.precioCompra}</td>
          <td>${fila.precioVenta}</td>
          <td>${fila.ganancia}</td>
        </tr>
      `;
    }
  
    contenido += `</table>`;
  
    printJS({ printable: contenido, type: 'raw-html', showModal: true, style: '@page { size: A4; margin: 0; }' });
  }

  

}
