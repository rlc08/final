import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  makeGetRequestToProtectedRoute() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    this.http.get('/', { headers }).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
      }
    );
  }

  onSubmit() {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        console.log('Login successful:');
        this.router.navigate(['/']);
        const userId = this.authService.getUserId();
      },
      (error: any) => {
        console.error('Login error:', error);

      }
    );
  }
}
