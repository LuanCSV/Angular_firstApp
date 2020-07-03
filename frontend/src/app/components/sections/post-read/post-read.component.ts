import { PostDeleteComponent } from './../post-delete/post-delete.component';
import { PostsService } from './../posts.service';
import { Post } from './../post.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['./post-read.component.css']
})
export class PostReadComponent implements OnInit {

  posts: Post[]

  post: Post;

  constructor(
    private postService: PostsService,
    private matModal: MatDialog) { }

  ngOnInit(): void {
    
    this.postService.read().subscribe(post =>{
      this.posts = post;
      for (let items of post) {
        this.post = items
      }
      console.log(post)  
    })
     
  }



  // post: Post = {
  //   id: 0,
  //   title: '',
  //   content: '',
  //   author: ''
  // }

  deletePost(event):void {
    //const items = this.posts
    let botaoid = event.currentTarget.id;
    
    this.postService.readById(+botaoid).subscribe(poste => {
      this.post = poste;

      this.matModal.open(PostDeleteComponent , {
        width: '400px',
        data: {
          idd: poste.id,
          authorr: poste.author,
          titlee: poste.title,
          contentt: poste.content
        }
      })
    })
    console.log(botaoid)
    
  }
}
