import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';
import { DirectivesModule } from '../../../theme/directives/directives.module';

/* componentes creados */
import { NuevaCotizacion02Component } from './nueva-cotizacion02/nueva-cotizacion02.component';


export const routes: Routes = [
    { path: '', redirectTo: 'nueva-cotizacion02', pathMatch: 'full'},
    { path: 'nueva-cotizacion02', component: NuevaCotizacion02Component, data: { breadcrumb: 'Nueva-cotizacion02' } }  
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
    
    NuevaCotizacion02Component
    

  ]
})
export class Cotizacion02Module { }
