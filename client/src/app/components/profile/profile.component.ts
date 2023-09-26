import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: {userId : string | null ;firstName: string | null; lastName: string | null; } = {
    userId : null,
    firstName: null,
    lastName: null,
  };
  userPosts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Get the userId from the AuthService
    console.log(this.authService.getUserData());
    
    // Set the userId directly in the user object

  
    
    };
  }

