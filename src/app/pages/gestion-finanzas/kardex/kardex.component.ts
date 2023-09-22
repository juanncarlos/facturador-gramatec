import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }


  //codigo para ver en cuadrillas o listas
  public toggle(type){
    this.type = type;
  }
}
