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

//pipes creados para las busquedas
import { VehiculoBuscarPipe } from 'src/app/theme/pipes/search/vehiculo-buscar.pipe';
import { ConductorPipe } from 'src/app/theme/pipes/search/conductor.pipe';
import { ClienteBuscarPipe } from 'src/app/theme/pipes/search/cliente-buscar.pipe';


/* componentes creados */
import { ClienteComponent } from './cliente/cliente.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ProductoComponent } from './producto/producto.component';
import { ConductorComponent } from './conductor/conductor.component';




export const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full'},
  { path: 'cliente', component: ClienteComponent, data: { breadcrumb: 'Cliente' } },
  { path: 'producto', component: ProductoComponent, data: { breadcrumb: 'Producto' } },
  { path: 'vehiculo', component: VehiculoComponent, data: { breadcrumb: 'Vehiculo' } },
  { path: 'conductor', component: ConductorComponent, data: { breadcrumb: 'Conductor' } }
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
  
    ClienteComponent,
    VehiculoComponent,
    ProductoComponent,
    VehiculoBuscarPipe,
    ConductorPipe,
    ClienteBuscarPipe,
    ConductorComponent
  ]
})
export class GestionInventarioModule { }
