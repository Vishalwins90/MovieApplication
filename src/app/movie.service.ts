import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/posts';
   private userdetail='http://localhost:3000/userdetails'
  // private url = 'http://localhost:3001/reveiewmovie'
    private url = 'http://localhost:3000/reveiewmovie'



  constructor(public http: HttpClient,public toastr:ToastrService) {
  }
   quizget() {
     return this.http.get(this.apiUrl);
   }
  movieid(id: any) {
    return this.http.get(this.apiUrl + "/" + id);
  }
   moviereviewid() {
     return this.http.get(this.url);    
   }

  Data(data: any) {
    return this.http.post(this.url, data);
  }

   patchreview(id:any,data:any){
     debugger
     console.log(data)
     return this.http.patch(this.url+"/"+id, data);
 }
 getReview(id:any,data:any){
  return this.http.get(this.apiUrl + "/" + id);
 }
 userdata() {
  return this.http.get(this.userdetail);
}
showWarning(message:any){
  this.toastr.error(message)
}

sendmoreuser(data:any){
debugger
return this.http.post(this.userdetail, data);
}
}



