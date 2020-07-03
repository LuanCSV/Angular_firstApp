import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.css']
})
export class MainsectionComponent implements OnInit {

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }
  copy():void{
    const emailCopy = document.getElementById('emailToClipboard');
    navigator.clipboard.writeText(emailCopy.innerText).then(() =>{
      this.postService.showMessage("E-mail copiado com sucesso!")
    })
    }
  


}
