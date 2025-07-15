import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Person {

  constructor(private http: HttpClient) { }

  addEmployee(details: unknown): Observable<any>{
    return this.http.post('http://localhost:8080/api/details/add', details)
  }


  getAllEmployees(): Observable<any> {
    return this.http.get('http://localhost:8080/api/details/all');
  }

  removeEmployee(id: unknown): Observable<any> {
    return this.http.post('http://localhost:8080/api/details/delete', id)
  }
}
