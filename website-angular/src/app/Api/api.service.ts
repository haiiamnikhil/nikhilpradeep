import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getProject(projectname: any):Observable<any>{
    return this.http.post('/projects/'+projectname+'/',{headers: this.HttpHeaders})
  }

  latestProjects():Observable<any>{
    return this.http.get('/api/latest-projects/',{headers: this.HttpHeaders})
  }
}
