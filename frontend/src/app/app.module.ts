import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatCardModule } from '@angular/material/card'
import{ MatToolbarModule } from '@angular/material/toolbar'

import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/template/footer/footer.component';
import { BodyComponent } from './components/template/body/body.component'
import { MainsectionComponent } from './components/sections/mainsection/mainsection.component';
import { PostSectionComponent } from './components/sections/post-section/post-section.component';
import { PostModalComponent } from './components/sections/post-modal/post-modal.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { PostReadComponent } from './components/sections/post-read/post-read.component';
import { PostDeleteComponent } from './components/sections/post-delete/post-delete.component'
;
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MainsectionComponent,
    PostSectionComponent,
    PostModalComponent,
    PostReadComponent,
    PostDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [
    PostSectionComponent,
    PostModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
