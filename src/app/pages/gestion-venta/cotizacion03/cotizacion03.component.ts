import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizacion03',
  templateUrl: './cotizacion03.component.html',
  styleUrls: ['./cotizacion03.component.scss']
})
export class Cotizacion03Component implements OnInit {
  originalData: any = ['opción 1', 'opción 2', 'opción 3', 'opción 4'];
  searchTerm: any;
  filteredData: any = [
    {
    name: 'juan',
    email: 'juan@gmail.com'
  },
  {
    name: 'carlos',
    email: 'carlos@gmail.com'
  }
];
  searchResults: any;
  

  options = ['opción 1', 'opción 2', 'opción 3', 'opción 4'];
  
  constructor() { }
  ngOnInit(): void {
  }
  filterData() {
    this.filteredData = this.originalData.filter(element =>
      element.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 ||
      element.email.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1);
  }

  search() {
    this.searchResults = this.options.filter(option =>
      option.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1);
  }
  select(option: string) {
    this.searchTerm = option;
    this.searchResults = [];
  }
  
  
  

}
