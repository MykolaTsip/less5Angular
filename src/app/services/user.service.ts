import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // 2
  userById(id): Observable<User[]> {
    return this.httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  // 6
  users(): Observable<User[]> {
    return this.httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  searchUser(users, user): User[] {
    return users.filter(value => value.id === +user.id || value.name.toLowerCase().includes(user.name.toLowerCase()));
  }

}
