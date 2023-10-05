import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-estadistico',
  templateUrl: './panel-estadistico.component.html',
  styleUrls: ['./panel-estadistico.component.scss']
})
export class PanelEstadisticoComponent implements OnInit {

  // Datos de ventas mensuales para ambos años
  salesData = [
    {
      name: 'Año Actual',
      series: [
        { name: 'Enero', value: 50 },
        { name: 'Febrero', value: 80 },
        { name: 'Marzo', value: 65 },
        // Agregar más datos aquí...
      ]
    },
    {
      name: 'Año Pasado',
      series: [
        { name: 'Enero', value: 40 },
        { name: 'Febrero', value: 75 },
        { name: 'Marzo', value: 60 },
        // Agregar más datos aquí...
      ]
    }
  ];

  // Variable para realizar el seguimiento del año seleccionado
  selectedYear: string = 'Año Actual';

  // Configuración del gráfico
  view: any[] = [700, 400];
  colorScheme = {
    domain: ['#5AA454', '#E44D25']
  };
  gradient: boolean = false;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Mes';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Ventas';

  // Función para cambiar el año seleccionado y actualizar los datos
  changeYear(year: string) {
    this.selectedYear = year;
  }

  get selectedData() {
    return this.salesData.find(data => data.name === this.selectedYear)?.series || [];
  }

  onSelect(event) {
    console.log(event);
  }


  

  ngOnInit(): void {
  }

}
