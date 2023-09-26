import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css'],
})
export class CreatePostComponent {
  post = {
    title: '',
    description: '',
    image: '',
  };

  constructor(private http: HttpClient, private authService: AuthService) {}


  onSubmit() {
    const formData = new FormData();
    const authToken = this.authService.getToken();

    formData.append('userId', this.authService.getUserId() || '');
    formData.append('title', this.post.title);
    formData.append('description', this.post.description); 
    formData.append('picturePath', this.post.image);


    this.authService.createPost(formData).subscribe(
      (response) => {
        console.log('Post created successfully:', response);
        
      },
      (error) => {
        console.error('Error creating post:', error);
      }
    );
  }
}
