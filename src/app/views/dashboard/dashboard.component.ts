import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { AuthService } from '../../services/auth.service';
import { UniversitiesService } from '../../services/universities.service';
import { Router } from '@angular/router';
import { University } from '../../models';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  courses : any [];

  constructor(
    private router: Router,
    private courseService: CourseService,
    private authService : AuthService,
    private universitiesService : UniversitiesService
) {


}

  ngOnInit() {
    // if (!this.authService.getToken) {
    //   this.router.navigate(['/login']);
    // }

    this.courseService.getCourses({}).subscribe(res => {
      console.log(res.rows)
      this.courses = res.rows;
    });

    const body : University= {
      "name":"XYZ University",
      "childOf": 2,
      "city": "UAE",
      "stateId": "4",
      "countryId": "38",
      "overview": "great university",
      "globalRank": 4,
      "ieltsAccepted":true,
      "uniEmail":"rg@hotmail.com"
    }
    this.universitiesService.addUniversity(body).subscribe(res => {
      console.log(res);
    })


  }
}

