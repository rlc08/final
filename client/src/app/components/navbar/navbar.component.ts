// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service'; // Import your authentication service
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false; // Initialize to false by default

  constructor(private authService: AuthService, private router : Router) {}

  ngOnInit(): void {
    // Check the user's authentication status when the component initializes
    this.authService.authStatus.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
  logout(): void {
    // Call the logout method from your authentication service
    this.authService.logout();
    // Update the isAuthenticated property
    this.isLoggedIn = false;
    this.router.navigate(['/login']);

  }

}
