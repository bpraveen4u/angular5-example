import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { of } from 'rxjs';
import {User} from "./user/user.model";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) {}

  public getUsers(): Observable<any> {
    let fakeUsers : User[] = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
      {id: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
      {id: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
      {id: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    ];
    return of(fakeUsers);
  }

}