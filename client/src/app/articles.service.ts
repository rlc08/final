import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private baseUrl = 'http://localhost:3000/posts';
  
  constructor(private http: HttpClient) {}

  getBlogPosts(headers: any): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.baseUrl, { headers });
  }
  

}
