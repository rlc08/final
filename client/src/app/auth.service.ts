import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpHeaders, HttpResponse, HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  authStatus = this.isAuthenticated.asObservable();
  token: string | null = null;
  userId: string | null = null;
  firstName : string | null = null;
  lastName : string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>('http://localhost:3000/auth/login', credentials).pipe(
      map((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.token = response.token;
          this.userId = response.user._id;
          this.firstName = response.firstName;
          this.lastName = response.lastName;
          console.log(this.userId);
          this.isAuthenticated.next(true); // Set authentication status to true
        }
        return response;
      })
    );
  }

  getToken(): string | null {
    return this.token;
  }

  handleUnauthorizedResponse(response: HttpErrorResponse) {
    if (response.status === 403) {
      console.log('UNAUTHORIZED');
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.isAuthenticated.next(false); // Set authentication status to false when logging out
  }

  isAuthenticatedUser(): boolean {
    return !!this.token;
  }

  getUserId(): string | null {
    return this.userId;
  }
  getUserData(): { userId: string | null; firstName: string| null; lastName: string | null } {
    const userData = {
      userId: this.userId,
      firstName: this.firstName,
      lastName: this.lastName,
    };
    return userData;
  }

  createPost(formData: FormData): Observable<any> {
    // Include the necessary headers, such as the authentication token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
    });

    return this.http.post('http://localhost:3000/posts', formData, { headers }).pipe(
      catchError((error: any) => {
        console.error('HTTP Error:', error);
        // Handle and display the error here
        throw error; // Rethrow the error to propagate it further
      })
    );
  }
}
