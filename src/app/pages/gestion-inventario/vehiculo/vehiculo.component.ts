import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VehiculoService } from './vehiculo.service';



@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {

  modalRef: NgbModalRef;
  datos: any[];
  nuevoDato: any = {};
  datoEditado: any = {};
  indiceEditar: number = -1;

  // Propiedades de paginación
  paginaActual = 1;
  elementosPorPagina = 5;

  // variable del buscador
  textoBusqueda: string = '';

  //ordenar de manera descendente
  ordenDescendente: boolean = true;
    

  
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

  
  
}

