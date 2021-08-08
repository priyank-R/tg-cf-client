import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';


import { CoursesRoutingModule } from './courses-routing.module';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormioAppConfig, FormioModule } from 'angular-formio';
import { AppConfig } from '../../../assets/formio-config';



@NgModule({
  declarations: [
    CoursesComponent,
    AddCoursesComponent,
    ViewCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    NgbModule,
    FormioModule
  ],
  providers: [
    {provide: FormioAppConfig, useValue: AppConfig},
  ]
})
export class CoursesModule { }
