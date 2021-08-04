import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { University } from '../../../models';
import { UniversitiesService } from '../../../services/universities.service';

import * as  viewUniversityFormioJson  from '../../../../assets/config/formio/view-university.json';
import { MapService } from '../../../services/map.service';

@Component({
  selector: 'app-view-universities',
  templateUrl: './view-universities.component.html',
  styleUrls: ['./view-universities.component.scss']
})
export class ViewUniversitiesComponent implements OnInit {
  universities : University [];
  closeModal: string;
  form;
  submission;
  modalTitle;
  stateMap: Map<number, string>;

  constructor(
    private universitiesService: UniversitiesService,
    private modalService: NgbModal,
    private mapService : MapService
  ) { }

  ngOnInit(): void {
    this.universitiesService.getUniversities().subscribe(res => {
      // console.log(res.rows)
      this.universities = res.rows;
    });
    console.log(this.mapService.mapStateIdToStateName(1));
    console.log(this.mapService.mapStateNameToStateId("Alberta"));


    this.form =  ( viewUniversityFormioJson as any ).default;
  }


  open(targetModal, university, ) {

    this.submission = {"data" : university}
    this.modalTitle = university.name;
    this.modalService.open(targetModal , { size: 'lg' } );
  }

}
