import { Post } from './../post.model';
import { Component, OnInit, Inject } from '@angular/core';
import { PostsService } from '../posts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  post: Post = {
    id: this.data.idd,
    title: this.data.titlee,
    content: this.data.contentt,
    author: this.data.authorr
  }

  constructor(
    private modalRefOpen: MatDialogRef<PostDeleteComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    

    // const id = +this.route.snapshot.paramMap.get('id');
    // this.postService.readById(this.post.id).subscribe(post => {
    //    this.post = post;
    //  })
  }

  closeModal():void {
    console.log("cancel dentro:" + this.post.id)
    this.modalRefOpen.close();
  }
  
  deletePost():void{

    this.postService.delete(this.data.idd).subscribe(() =>{
      this.postService.showMessage('Publicação deletada com sucesso!')
    })
    this.closeModal();

    setTimeout(() => {
      document.location.reload(true);
    }, 2500)
  }
}
