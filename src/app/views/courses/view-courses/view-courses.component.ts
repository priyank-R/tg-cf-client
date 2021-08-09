import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';

import * as ViewCourseFormioJson from '../../../../assets/config/formio/view-course.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent implements OnInit {
  courses : any;
  form : any;
  submission : any;
  modalTitle : string;
  currentPageNumber = 1;


  constructor(
    private courseService: CourseService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.form =  ( ViewCourseFormioJson as any ).default;
    this.courseService.getCourses({}).subscribe(
      res => {
        this.courses = res;
      }
    )
  }


  open(targetModal, course) {

    this.submission = {"data" : course}
    console.log(course);

    this.modalTitle = course.name;
    this.modalService.open(targetModal , { size: 'lg' } );
  }

}
