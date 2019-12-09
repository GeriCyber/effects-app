import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${this.url}/users?per_page=6&delay=3`)
    .pipe(
      map((users: any) =>  users.data )
    );
  }

  getUserByID(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
    .pipe(
      map((users: any) =>  users.data )
    );
  }
}
