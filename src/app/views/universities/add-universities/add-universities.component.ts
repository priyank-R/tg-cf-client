import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from '../../../services/universities.service';

import * as  addUniversityFormioJson  from '../../../../assets/config/formio/add-university.json';

@Component({
  selector: 'app-add-universities',
  templateUrl: './add-universities.component.html',
  styleUrls: ['./add-universities.component.scss']
})
export class AddUniversitiesComponent implements OnInit {
  form;
  options;
  submission;



  constructor(
    private universitiesService: UniversitiesService
  ) { }

  ngOnInit(): void {
    this.form =  (addUniversityFormioJson as any).default;
  }

  onSubmit(submission: any) {
    delete submission.data.submit
    this.universitiesService.addUniversity(submission.data).subscribe((res) => {
      console.log(res);
      console.log(submission);
      this.ngOnInit();
    })
  }

}
