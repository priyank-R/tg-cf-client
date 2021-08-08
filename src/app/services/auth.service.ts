import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Me, Token } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { isUniUser } from '../models/isUniUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private getLoggedUser
  private loggedUserSubject: BehaviorSubject<Token>;
  public loggedInUser: Observable<any>;
  // public isUniUser;
  // public isUniUserSubject : BehaviorSubject<Boolean>;

  constructor(
    private http: HttpClient,
    private router: Router
  )
  {
        this.getLoggedUser = localStorage.getItem('token');
        this.loggedUserSubject = new BehaviorSubject(this.getLoggedUser);
        this.loggedInUser = this.loggedUserSubject.asObservable();
        // this.findisUniUser().subscribe(res => {this.isUniUserSubject.next(res)} );
  }

  findisUniUser(){
    const token = this.loggedInUserValue;
    console.log(token);

    console.log("token",token);
    const url = `${environment.apiUrl}/user/me`
    return this.http.get<isUniUser>(
      url,
      {
        headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.loggedInUserValue}`,
          'Accept': '*/*',
        })
      }
    ).pipe(map(response=> {
      // this.isUniUserSubject.next(response.isUniUser);
      return {'isUniUser' : response.isUniUser}
    }))
  }


  login(username: string, password: string) {
    const body = {
      "userEmail": username,
      "userPassword": password
    }
    const url = `${environment.apiUrl}/tglogin`
    return this.http.post(url, body, { responseType: "text"  })
        .pipe(map(response=> {
            localStorage.setItem('token', response);
            this.loggedUserSubject.next({'token' : response});
            console.log(response);
            return response;

    }));
  }

  public get loggedInUserValue(){
    return this.loggedUserSubject.value;
  }

  // public get isUniUserValue(){
  //   return this.isUniUserSubject.value;
  // }


  logoutUser() {
    localStorage.removeItem('token');
    this.loggedUserSubject.next(null);
  }
}
