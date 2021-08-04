import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { University } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  constructor(
    private http: HttpClient,
    private authService : AuthService,
  ) { }


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

  getUniversities() {
    const url = `${environment.apiUrl}/alluniversities`
    return this.http.get<any>(url);
  }
}
