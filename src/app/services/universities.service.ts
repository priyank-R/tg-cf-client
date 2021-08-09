import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { University } from '../models';
import { isUniUser } from '../models/isUniUser';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService implements OnInit {
  public isUniUser : isUniUser;

  constructor(
    private http: HttpClient,
    private authService : AuthService,
  ) {

  }


  ngOnInit() {
  }


  addUniversity(university: University) {
    const token = this.authService.loggedInUserValue;
    console.log("token",token);


    const url = `${environment.apiUrl}/adduniversity`
    return this.http.post(
      url,
      university,
      {
        headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.authService.loggedInUserValue}`,
          'Accept': '*/*',
        })
      }
    );
  }


  getUniversitiesForTgUser() {
    const url = `${environment.apiUrl}/alluniversities`
    return this.http.get<any>(url).pipe(map(response => {return response.rows}))
  }

  getUniversitiesForUniUser() {
    const url = `${environment.apiUrl}/user/me`
    return this.http.get<any>(url,
      {
        headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.authService.loggedInUserValue}`,
          'Accept': '*/*',
        })
      }
      ).pipe(map(response => {
      return response.University;
    }))
  }

  // getUniversities(){
  //   return this.isUniUser
  // }
}
