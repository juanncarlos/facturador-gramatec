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





export const routes: Routes = [
  { path: '', redirectTo: 'ganancia', pathMatch: 'full'},
  { path: 'ganancia', component: GananciasComponent, data: { breadcrumb: 'Ganancia' } },
  { path: 'kardex', component: KardexComponent, data: { breadcrumb: 'Kardex'}}
  
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
    KardexComponent
  ]
})
export class GestionFinanzasModule { }
