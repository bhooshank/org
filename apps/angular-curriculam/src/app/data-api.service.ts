import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataAPIService {
  contries:any;
  constructor(private http: HttpClient) {}

  getEmployeesAllData(): Observable<any[]> {
    return this.http.get('https://dummy.restapiexample.com/api/v1/employees').pipe(map((data:any) =>  {
      return data.data;
    }));
  }
}
