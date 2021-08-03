import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesComponent } from './universities.component';
import { ViewUniversitiesComponent } from './view-universities/view-universities.component';
import { AddUniversitiesComponent } from './add-universities/add-universities.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Universities'
    },
    children: [
      {
        path: '',
        redirectTo: 'add',
        pathMatch: 'full'
      },
      {
        path: 'universities',
        component: UniversitiesComponent,
        data: {
          title: 'Universities'
        }
      },
      {
        path: 'view',
        component: ViewUniversitiesComponent,
        data: {
          title: 'View Universities'
        }
      },
      {
        path: 'add',
        component: AddUniversitiesComponent,
        data: {
          title: 'Add Universities'
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
export class UniversitiesRoutingModule { }
