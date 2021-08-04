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
  refreshForm;



  constructor(
    private universitiesService: UniversitiesService
  ) { }

  ngOnInit(): void {
    this.form =  (addUniversityFormioJson as any).default;
    // this.submission = {
    //   "data": {
    //       "name": "1",
    //       "city": "1",
    //       "stateId": "1",
    //       "countryId": "1",
    //       "overview": "1",
    //       "ieltsAccepted": true,
    //       "uniEmail": "xyz@xyz.com",
    //       "childOf": 1,
    //       "globalRank": 1
    //   }
    // }
  }

  onSubmit(submission: any) {
    delete submission.data.submit
    this.universitiesService.addUniversity(submission.data).subscribe((res) => {
      console.log(res);
      console.log(submission);
      this.form =  (addUniversityFormioJson as any).default;
      this.ngOnInit();
      this.refreshForm.emit({
        property: 'form',
        value: this.form
        });
    })
  }

}
