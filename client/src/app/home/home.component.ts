import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { BlogPost } from '../blog-post';
import { AuthService } from '../auth.service'; // Import your AuthService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(
    private blogPostService: ArticlesService,
    private authService: AuthService // Inject your AuthService
  ) {}
  
  ngOnInit(): void {
    this.loadBlogPosts();
  }

  loadBlogPosts(): void {
    // Get the JWT token from your AuthService
    const token = this.authService.getToken();


    const headers = {
      Authorization: `Bearer ${token}`
    };

    this.blogPostService.getBlogPosts(headers).subscribe({
      next: (posts) => {
        this.blogPosts = posts;
      },
      error: (error) => {
        console.error('Error fetching blog posts:', error); 
      },
      complete: () => {

      },
    });
  }
}
