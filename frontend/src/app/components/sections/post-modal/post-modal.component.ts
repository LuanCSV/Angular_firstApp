import { Post } from './../post.model';
import { PostsService } from './../posts.service';
import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'


@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent {

  post: Post = {
    title: this.data.title,
    content: this.data.content,
    author: this.data.author
  }

  constructor(
    private modalRefOpen: MatDialogRef<PostModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private postService: PostsService) { }



  closeModal():void {
    this.modalRefOpen.close();
  }

  createPost():void {
    this.postService.create(this.post).subscribe(() =>{
      this.postService.showMessage('Publicação criada com sucesso!')
    })
    this.closeModal();

    setTimeout(() => {
      document.location.reload(true);
    }, 2000)
  }

  

}
