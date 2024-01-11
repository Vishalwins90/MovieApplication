import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
form:any
  fetchAllData: any=[];

constructor(public movie:MovieService,  private formBuilder: FormBuilder){
  
}
ngOnInit(){

  this.form = this.formBuilder.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required]],
    password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,}'),Validators.minLength(6), Validators.maxLength(20)]]
  });
}



  Submit(): void{
    if(this.form.invalid){
      this.form.markAllAsTouched()
    } else{
      debugger
      this.movie.sendmoreuser(this.form.value).subscribe(
        (data: any) => {
       this.fetchAllData=data
       this.form.reset()
        },
      );
    }
    }
  }


