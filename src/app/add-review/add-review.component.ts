import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
// import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  addreview: any[] = [];
  form: any
  id: any
  contacts: any = []

  currentList: any = [];
  constructor(public dialogRef: MatDialogRef<AddReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public movie: MovieService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }
  ngOnInit() {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      rating: ['', [Validators.required, this.ratingValidator]],
    });

  }

  saveReview() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
    else {
      let data = {
        movieid: this.data.movieid,
        Heading: "All Ratings and Reviews",
        description: this.form.value.description,
        rating: this.form.value.rating,
        name: this.form.value.name,
      }


      // update the rewiew the data by partiular id //
      this.movie.Data(data).subscribe(
        (data: any) => {
          this.addreview = data
          this.form.reset();
          this.dialogRef.close();
        },
      );
    }

  }


  ratingValidator(control: any) {
    const rating = control.value;
    if (rating < 1 || rating > 5) {
      return { invalidRating: true };
    }
    return null;
  }




  restrictKey(event: any) {
    if (event.keyCode == 101 || event.keyCode == 69) {
      return false
    }
    return true
  }
}
