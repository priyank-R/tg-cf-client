import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { University } from '../../../models';
import { UniversitiesService } from '../../../services/universities.service';

import * as  viewUniversityFormioJson  from '../../../../assets/config/formio/view-university.json';
import { AuthService } from '../../../services/auth.service';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-view-universities',
  templateUrl: './view-universities.component.html',
  styleUrls: ['./view-universities.component.scss']
})
export class ViewUniversitiesComponent implements OnInit {
  universities : any;
  children : University [];
  closeModal: string;
  form;
  submission;
  modalTitle;
  stateMap: Map<number, string>;
  currentPageNumber = 1;

  constructor(
    private universitiesService: UniversitiesService,
    private modalService: NgbModal,
    public loaderService: LoaderService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.findisUniUser().subscribe(res => {
      console.log(res);
      if(res.isUniUser === true) {
        this.universitiesService.getUniversitiesForUniUser().subscribe(res => {
          console.log(res);

          this.children = res.Children;
          delete res.Children;
          this.universities = res;
        })

      }
      else{
        this.universitiesService.getUniversitiesForTgUser().subscribe(res => {
          this.universities = res;
          console.log(res);

        })
      }
    })



    this.form =  ( viewUniversityFormioJson as any ).default;
  }


  open(targetModal, university, ) {

    this.submission = {"data" : university}
    this.modalTitle = university.name;
    this.modalService.open(targetModal , { size: 'lg' } );
  }

  chooseChildUniversityDropDown(){

  }

}
