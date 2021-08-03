import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient,
    private authServices : AuthService
  ) { }


  getCourses(filter : any) {
    const url = `${environment.apiUrl}/course/filter`
    const body = {}
    return this.http.post<any>(url,body)
  }
}
