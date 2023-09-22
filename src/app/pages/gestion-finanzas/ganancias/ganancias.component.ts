import { Component, OnInit } from '@angular/core';

import { GanaciaService } from './ganacia.service'

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
  public type:string = 'grid';

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

  constructor( private gananciaService: GanaciaService) { }

  ngOnInit(): void {
    this.ganancias = this.gananciaService.obtenerGanancias().sort((a, b) => b.id - a.id); //forma descendente
  }


  /* paginacion */
  cambiarPagina(evento: number): void {
    this.paginaActual = evento;
  }


  //codigo para ver en cuadrillas o listas
  public toggle(type){
    this.type = type;
  }

  

}
