import { Injectable } from '@angular/core';

export interface Sale {
    year: number;
    value: number;
  }

@Injectable({
    providedIn: 'root'})
export class PanelEstadisticoService {


    private salesData: Sale[] = [
        { year: 2022, value: 10000 },
        { year: 2021, value: 8000 },
        { year: 2020, value: 12000 },
        // Agrega más datos de ventas aquí...
      ];
    
      getSalesData(): Sale[] {
        return this.salesData;
      }

constructor() { }

}
