import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiReniecService } from './apiReniec.service';




@Component({
  selector: 'app-api-reniec',
  templateUrl: './api-reniec.component.html',
  styleUrls: ['./api-reniec.component.scss']
})
export class ApiReniecComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  public btn_load: boolean = false;
  public form: any = { type: '', number: '' };
  public dato: any = {};
  public errorMessage: string = ''; // Agregar esta línea
  public showNoResultsMessage: boolean = false; // Agregar esta línea

  constructor(private consultaService: ApiReniecService) {}

  ngOnInit(): void {}

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
              this.form.nombre_mostrar = this.dato.nombre_completo;
              this.showNoResultsMessage = false;
            } else if (this.form.type === 'ruc') {
              this.form.nombre_mostrar = this.dato.nombre_o_razon_social;
              this.showNoResultsMessage = false;
            }
          }else {
            this.dato = {}; // Limpiar datos si no se encontraron
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
    this.form.nombre_mostrar = '';
    this.form.apellido_paterno = '';
    this.form.apellido_materno = '';
    this.form.direccion = '';
    this.form.distrito = '';
    this.form.alias = '';
    this.form.number = ''; // Limpia el número de documento
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


  //! ************** primer código antes de hacer modificaiones ****************************
  
  /* @ViewChild('myForm') myForm!: NgForm;

  public btn_load: boolean = false;
  public form: any = { type: '', number: '' };
  public user: any = {};
  public dato: any = {};

  constructor(private consultaService: ApiReniecService) {}

  ngOnInit(): void {}

  get_users() {
    this.btn_load = true;
    if (this.myForm.valid) {
      this.consultaService
        .list_users(this.form.type, this.form.number)
        .subscribe({
          next: (res) => {
            this.btn_load = false;
            this.dato = res.data;
            this.form.nombres = res.nombres;
            this.form.apellido_paterno = res.apellido_paterno;
            this.form.apellido_materno = res.apellido_materno;
            this.form.direccion = res.direccion;
            this.form.distrito = res.distrito;
            this.form.alias = res.nombre_o_razon_social;
          },
          error: () => {
            this.btn_load = false;
            Swal.fire('Ups!', 'No hay resultados', 'error');
          },
        });
    } else {
      this.btn_load = false;
      Swal.fire('Ups!', 'Seleccione un tipo e ingrese su numero', 'error');
    }
   console.log("hoal" +  this.data);
  }

  clearAPI() {
    this.dato = {};
  }

  clearFORM() {
    this.form = { type: '', number: '' };
  }

  register() {
    console.log(this.form);
    const name = `${this.form.nombre_completo} ${this.form.apellido_paterno} ${this.form.apellido_materno}`;
    Swal.fire('HOLAss', name, 'success');
  }  */
  
}
