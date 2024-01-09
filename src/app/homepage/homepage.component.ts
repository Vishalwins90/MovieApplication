import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  allmovies: any[] = [];
  users: any;
  fetchAllData: any = [];
  filterBy: any
  newimage: any = []
  constructor(public movie: MovieService, public router: Router) { }
  ngOnInit() {
    // show movie card by using the get api //
    this.movie.quizget().subscribe((data) => {
      this.users = data;
      this.fetchAllData = data;
      this.newimage = this.fetchAllData.filter((f: any) => f.key == true)
      // console.log(this.fetchAllData)
    });
  }
  // filter the movie api by using the get api in by name //
  Filter() {
    this.fetchAllData = [...this.users.filter((user: any) => user.title.includes(this.filterBy))]
  }
  Moviedeatail(id: any) {
    this.router.navigate([`detail/${id}`]);
  }
}
