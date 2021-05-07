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

  listProjects():Observable<any>{
    return this.http.get('/api/list-projects/',{headers: this.HttpHeaders})
  }

  contactDetails(data:any):Observable<any>{
    return this.http.post('/api/contact-details/',data,{headers: this.HttpHeaders})
  }

  aboutme():Observable<any>{
    return this.http.get('/api/about/',{headers: this.HttpHeaders})
  }

  listServices():Observable<any>{
    return this.http.get('/api/list-services/',{headers: this.HttpHeaders})
  }

  serviceDetails(data:any):Observable<any>{
    return this.http.post('/service/'+data+'/',{headers: this.HttpHeaders})
  }

  getResume():Observable<any>{
    return this.http.get('/api/get-latest-resume/',{headers: this.HttpHeaders})
  }
  
}
