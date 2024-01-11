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
  alldata: any = []

  currentList: any = [];
  fetchAllData: any=[];
  constructor(public dialogRef: MatDialogRef<AddReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public movie: MovieService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }
  ngOnInit() {
debugger
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      rating: ['', [Validators.required, this.ratingValidator]],
    });
       
  let dat= this.fetchAllData.push(this.data.movierewiew);

    this.alldata =dat
    console.log(this.alldata)
    
    debugger
     if (this.data && this.data.movierewiew) {
      this.form.patchValue({
        name: this.data.movierewiew.name,
       description: this.data.movierewiew.description,
     rating: this.data.movierewiew.rating,
       });
       
  }
  console.log(this.data.movierewiew.reviews)
  }
  

  saveReview() {
    debugger
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
    else {

      const reviewIdToUpdate = this.data.id;
      //  update the rewiew the data by partiular id //
      this.movie.patchreview(reviewIdToUpdate,this.form.value).subscribe(
        (data: any) => {
          this.addreview = data
          this.form.reset();
        this.dialogRef.close();
        }, );
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