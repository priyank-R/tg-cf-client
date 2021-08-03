import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';


import { CoursesRoutingModule } from './courses-routing.module';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';



@NgModule({
  declarations: [
    CoursesComponent,
    AddCoursesComponent,
    ViewCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
