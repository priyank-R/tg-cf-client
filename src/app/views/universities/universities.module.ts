import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversitiesComponent } from './universities.component';
import { ViewUniversitiesComponent } from './view-universities/view-universities.component';
import { AddUniversitiesComponent } from './add-universities/add-universities.component';
import { UniversitiesRoutingModule } from './universities-routing.module';

import { FormioModule, FormioAppConfig } from 'angular-formio';
import { AppConfig } from '../../../assets/formio-config';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    UniversitiesComponent,
    ViewUniversitiesComponent,
    AddUniversitiesComponent
  ],
  imports: [
    CommonModule,
    UniversitiesRoutingModule,
    FormioModule,
    NgbModule

  ],
  providers: [
    {provide: FormioAppConfig, useValue: AppConfig},
  ]
})
export class UniversitiesModule { }
