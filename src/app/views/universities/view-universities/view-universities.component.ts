import { Component, OnInit } from '@angular/core';
import { University } from '../../../models';
import { UniversitiesService } from '../../../services/universities.service';

@Component({
  selector: 'app-view-universities',
  templateUrl: './view-universities.component.html',
  styleUrls: ['./view-universities.component.scss']
})
export class ViewUniversitiesComponent implements OnInit {
  universities : University []

  constructor(
    private universitiesService: UniversitiesService,
  ) { }

  ngOnInit(): void {
    this.universitiesService.getUniversities().subscribe(res => {
      console.log(res.rows)
      this.universities = res.rows;
    });
  }

}
