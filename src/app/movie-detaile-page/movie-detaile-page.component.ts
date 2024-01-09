import { Component, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Dialog, DialogRef, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { AddReviewComponent } from '../add-review/add-review.component';
@Component({
  selector: 'app-movie-detaile-page',
  templateUrl: './movie-detaile-page.component.html',
  styleUrls: ['./movie-detaile-page.component.css']
})
export class MovieDetailePageComponent {
  fetchAllData: any = [] = [];
  id: any
  reviews: any = []
  form: any
  rewiewdata: any = []
  adddata: any = []
  constructor(public dialogRef: MatDialogRef<AddReviewComponent>, public moviedata: MovieService, private route: ActivatedRoute, public router: Router, public dialog: MatDialog) {
  }
  ngOnInit() {
    // show the movie details by particular id using another database//
    this.id = this.route.snapshot.paramMap.get('id');
    this.moviedata.quizgetid(this.id).subscribe((data: any) => {
      this.fetchAllData.push(data);
      this.adddata = data
    })


    // show review of all review//
    this.moviedata.moviereviewid().subscribe((reviewData: any) => {
      this.reviews = reviewData.filter((data: any) => data.movieid == this.id)
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddReviewComponent, {
      width: '300px',
      data: {
        movieid: this.adddata.movieid,
      },
    });
    // update the value on without refresh the page in angular //
    dialogRef.afterClosed().subscribe((close: any) => {
      this.moviedata.moviereviewid().subscribe((reviewData: any) => {
        this.reviews = reviewData.filter((data: any) => data.movieid == this.id);
      })
    })
  }
}