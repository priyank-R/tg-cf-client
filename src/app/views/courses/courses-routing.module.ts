import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Courses'
    },
    children: [
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: 'courses',
        component: CoursesComponent,
        data: {
          title: 'Courses'
        }
      },
      {
        path: 'view',
        component: ViewCoursesComponent,
        data: {
          title: 'View Courses'
        }
      },
      {
        path: 'add',
        component: AddCoursesComponent,
        data: {
          title: 'Add Courses'
        }
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
