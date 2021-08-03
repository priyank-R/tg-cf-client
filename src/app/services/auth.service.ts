import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Token } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';


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

  // login(username: string, password: string) {
  //   const url = `${environment.apiUrl}/tglogin`
  //   const body = {
  //     "userEmail": username,
  //     "userPassword": password
  //   }
  //   return this.http.post(url,body,{ responseType: "text"  })
  //     .pipe(tap(res => {
  //       console.log(res);
  //       localStorage.setItem("token", res);
  //       return res;
  //     }));
  // }


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

  logoutUser() {
    localStorage.removeItem('token');
    this.loggedUserSubject.next(null);
}
}
