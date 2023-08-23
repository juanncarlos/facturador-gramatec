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

  constructor(private consultaService: ApiReniecService) {}

  ngOnInit(): void {}

  get_users() {
    this.btn_load = true;

    const minLengthDNI = 8;
    const minLengthRUC = 11;
    let errorMessage = '';

    if (this.form.type === 'dni' && this.form.number.length !== minLengthDNI) {
      errorMessage = `Ingrese ${minLengthDNI} dígitos para el DNI`;
    } else if (this.form.type === 'ruc' && this.form.number.length !== minLengthRUC) {
      errorMessage = `Ingrese ${minLengthRUC} dígitos para el RUC`;
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
        },
        error: () => {
          this.btn_load = false;
        },
      });
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
}
