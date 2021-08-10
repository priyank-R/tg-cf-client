import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private getLoggedUser
  private loggedUserSubject: BehaviorSubject<Token>;
  public loggedInUser: Observable<any>;

  constructor(
    private http: HttpClient,
    private router: Router
  )
  {
        this.getLoggedUser = localStorage.getItem('token');
        this.loggedUserSubject = new BehaviorSubject(this.getLoggedUser);
        this.loggedInUser = this.loggedUserSubject.asObservable();
  }

  findisUniUser(){
    const token = this.loggedInUserValue;
    console.log(token);

    console.log("token",token);
    const url = `${environment.apiUrl}/user/me`
    return this.http.get<any>(
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



  logout() {
    localStorage.removeItem('token');
    this.loggedUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
