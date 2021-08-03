import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent implements OnInit {
  courses : any [];

  constructor(
    private courseService: CourseService,
  ) { }

  ngOnInit() {
    this.courseService.getCourses({}).subscribe(res => {
      console.log(res.rows)
      this.courses = res.rows;
    });
  }

}
