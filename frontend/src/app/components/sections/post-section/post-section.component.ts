import { PostModalComponent } from './../post-modal/post-modal.component';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
 
@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.css']
})
export class PostSectionComponent implements OnInit {

  author: HTMLElement;
  title: HTMLElement;
  content:HTMLElement;

  constructor(
    private matModal: MatDialog) { 
    }

  ngOnInit(): void {
  }

  openModal(): void{
    this.matModal.open(PostModalComponent , {
      width: '400px',
      data: {
        author: this.author, 
        title: this.title, 
        content: this.content}
    })
  }
}
