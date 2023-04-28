import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {


  public estado = ['activo', 'inactivo'];
  public genderOption:string;


  imagen: File;
  imagenPreview: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  url: string|null|ArrayBuffer = './assets/banner1.jpg' 
onFileSelected(files: FileList | null) {
    if (files) {
        var reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload = (event:Event) => {
          let fileReader = event.target as FileReader
          this.url = fileReader.result;
        }
    }
  }
   
}
