import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getUserById(userId: string) {
    console.log(userId);
    return this.http.get(`${this.baseUrl}/${userId}`); 
  }

  getPostsByUserId(userId: string) {
    return this.http.get(`${this.baseUrl}/${userId}/posts`); 
  }
}
