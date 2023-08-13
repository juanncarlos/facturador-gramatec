import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';
import { DirectivesModule } from '../../theme/directives/directives.module';

//libreria para la paginacion
import { NgxPaginationModule } from 'ngx-pagination';

// pipe de busqueda
import { Cotizacion03Pipe } from 'src/app/theme/pipes/search/cotizacion03-buscar.pipe';


/* componentes creados */
import { NotaVentaComponent } from './nota-venta/nota-venta.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ConsultaFarvetComponent } from './consulta-farvet/consulta-farvet.component';
import { Cotizacion02Component } from './cotizacion02/cotizacion02.component';
import { Cotizacion03Component } from './cotizacion03/cotizacion03.component';
import { CotizacionDetalleComponent } from './cotizacion-detalle/cotizacion-detalle.component';
/* import { NuevaCotizacion02Component } from './cotizacion02/nueva-cotizacion02/nueva-cotizacion02.component'; */


export const routes: Routes = [
  { path: '', redirectTo: 'nota-venta', pathMatch: 'full'},
  { path: 'nota-venta', component: NotaVentaComponent, data: { breadcrumb: 'Nota-venta' } },
  { path: 'cotizacion', component: CotizacionComponent, data: { breadcrumb: 'Cotizacion' } },
  { path: 'cotizacion02', component: Cotizacion02Component, data: { breadcrumb: 'Cotizacion02' } },
  { path: 'cotizacion03', component: Cotizacion03Component, data: { breadcrumb: 'Cotizacion03' } },
  { path: 'consulta-farvet', component: ConsultaFarvetComponent, data: { breadcrumb: 'Consulta-farvet' } },
  { path: 'cotizacion-detalle', component: CotizacionDetalleComponent, data: { breadcrumb: 'Cotizacion-detalle' } },
  { path: 'cotizacion02', loadChildren: () => import('./cotizacion02/cotizacion02.module').then(m => m.Cotizacion02Module), data: { breadcrumb: 'Cotizacion02' } }
  /* { path: 'editor', component: EditorComponent, data: { breadcrumb: 'Editor' } } */
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    NgbModule,
    CKEditorModule,
    DirectivesModule,
    NgbModule,
    RouterModule.forChild(routes),
    NgxPaginationModule
    
  ],
  declarations: [
    /* ControlsComponent,
    FileUploaderComponent,
    ImageUploaderComponent,
    MultipleImageUploaderComponent,
    LayoutsComponent,
    WizardComponent,
    EditorComponent */
  
    
  
    NotaVentaComponent,
    CotizacionComponent,
    ConsultaFarvetComponent,
    Cotizacion02Component,
    Cotizacion03Component,
    Cotizacion03Pipe,
    CotizacionDetalleComponent
    /* NuevaCotizacion02Component */
  ]
})
export class GestionVentaModule { }
