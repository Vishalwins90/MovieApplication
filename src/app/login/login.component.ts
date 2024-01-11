import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any
  userexit: any = []
  fetchAllData: any = [];
  constructor(public userdetail: MovieService, public route: Router, public toaster: MovieService) {

  }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
    debugger
    this.userdetail.userdata().subscribe(
      (data: any) => {
        this.fetchAllData = data
        console.log(this.fetchAllData)
      },

    );

  }


  submit() {
    debugger

    if(this.form.invalid){
      this.form.markAllAsTouched();
    }  else{


      let data = {
        email: this.form.value.email,
        password: this.form.value.password
      };
     let userdata= this.fetchAllData.find((user: any) => data.email === user.email && data.password === user.password)
     if (this.fetchAllData && userdata) {
      console.log(userdata.id)
      this.route.navigate(['dashboard']);
      localStorage.setItem('user', JSON.stringify(userdata.id));
      
    }
     else{
      this.toaster.showWarning("User not found");
     }
      
    }
   
  }
  }





