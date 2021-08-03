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
    private router: Router,
    private authService : AuthService,
  ) { }


  // login(username: string, password: string) {
  //   const url = `${environment.apiUrl}/tglogin`
  //   const body = {
  //     "userEmail": username,
  //     "userPassword": password
  //   }
  //   return this.http.post(url,body,{ responseType: "text"  })
  //     .pipe(tap(res => {
  //       localStorage.setItem("token", res);
  //       this.tokenSubject.next({token: res});
  //       return res;
  //     }));
  // }

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
}
