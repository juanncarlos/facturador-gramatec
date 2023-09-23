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



/* componentes creados */
import { GananciasComponent } from './ganancias/ganancias.component';
import { KardexComponent } from './kardex/kardex.component';
import { KardexValoradoComponent } from './kardex-valorado/kardex-valorado.component';

/* pipes de busqueda */
import { GananciaBuscarPipe } from 'src/app/theme/pipes/search/ganancia-buscar.pipe';
import { KardexBuscarPipe } from 'src/app/theme/pipes/search/kardex-buscar.pipe';
import { KardexValoradoBuscarPipe } from 'src/app/theme/pipes/search/kardexValorado-buscar.pipe';





export const routes: Routes = [
  { path: '', redirectTo: 'ganancia', pathMatch: 'full'},
  { path: 'ganancia', component: GananciasComponent, data: { breadcrumb: 'Ganancia' } },
  { path: 'kardex', component: KardexComponent, data: { breadcrumb: 'Kardex'}},
  { path: 'kardex-valorado', component: KardexValoradoComponent, data: { breadcrumb: 'Kardex Valorado'}}
  
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
  
  
    GananciasComponent,
    KardexComponent,
    GananciaBuscarPipe,
    KardexBuscarPipe,
    KardexValoradoBuscarPipe,
    KardexValoradoComponent
  ]
})
export class GestionFinanzasModule { }
