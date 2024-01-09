import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/posts';
  private url = 'http://localhost:3001/reveiewmovie'
  private url2 = 'http://localhost:3001/comments'


  constructor(public http: HttpClient) {
  }
  quizget() {
    return this.http.get(this.apiUrl);
  }
  quizgetid(id: any) {
    return this.http.get(this.apiUrl + "/" + id);
  }
   moviereviewid() {
     return this.http.get(this.url);    
   }
  //  sendmorereview(id: any,data:any) {
  //   debugger
  //   return this.http.post(this.url+"/"+id, data);
  // }
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
}
