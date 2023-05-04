import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';
import { DirectivesModule } from '../../theme/directives/directives.module';

/* componentes creados */
import { NotaVentaComponent } from './nota-venta/nota-venta.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ConsultaFarvetComponent } from './consulta-farvet/consulta-farvet.component';


export const routes: Routes = [
  { path: '', redirectTo: 'nota-venta', pathMatch: 'full'},
  { path: 'nota-venta', component: NotaVentaComponent, data: { breadcrumb: 'Nota-venta' } },
  { path: 'cotizacion', component: CotizacionComponent, data: { breadcrumb: 'Cotizacion' } },
  { path: 'consulta-farvet', component: ConsultaFarvetComponent, data: { breadcrumb: 'Consulta-farvet' } }
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
    RouterModule.forChild(routes)
    
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
    ConsultaFarvetComponent
  ]
})
export class GestionVentaModule { }
