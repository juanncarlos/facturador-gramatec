import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';
import { DirectivesModule } from '../../theme/directives/directives.module';

/* componentes creados */
import { ClienteComponent } from './cliente/cliente.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ProductoComponent } from './producto/producto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full'},
  { path: 'cliente', component: ClienteComponent, data: { breadcrumb: 'Cliente' } },
  { path: 'producto', component: ProductoComponent, data: { breadcrumb: 'Producto' } },
  { path: 'vehiculo', component: VehiculoComponent, data: { breadcrumb: 'Vehiculo' } }
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
  
    ClienteComponent,
    VehiculoComponent,
    ProductoComponent
  ]
})
export class GestionInventarioModule { }
