import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = "http://localhost:3001/postagens";

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar) { }

  showMessage(msg:string): void{
    this.snackbar.open( msg ,'X',{
      duration: 1900,
      horizontalPosition: "right",
      verticalPosition:"top",
      panelClass: ['msg-success']
    });
  }

  create(pub: Post): Observable<Post>{
    return this.http.post<Post>(this.baseUrl, pub);
  }

  read(): Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl).pipe(
      map((obj) => obj))
  }

  readById(id:number): Observable<Post>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Post>(url).pipe(
      map((obj) => obj)
    )
  }

  delete(id:number): Observable<Post>{
    const url = `${this.baseUrl}/${id}`
    console.log(id, url);
    return this.http.delete<Post>(url);
  }
}
