import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {


  public estado = ['activo', 'inactivo'];
  public genderOption:string;

  constructor() { }

  ngOnInit(): void {
  }

}
