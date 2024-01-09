import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieDetailePageComponent } from './movie-detaile-page/movie-detaile-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogModule, MatDialogRef,  MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { AddReviewComponent } from './add-review/add-review.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieDetailePageComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
    
    // MAT_DIALOG_DATA
    
  ],
  providers: [
    {provide: MatDialogRef, useValue:{ }},
    { provide: MAT_DIALOG_DATA, useValue: { } }
    // MatDialog,
		// MatDialogRef
    // MatDialogRef 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
