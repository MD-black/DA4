import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  users!: any;

  constructor(private http: HttpClient) {}
  
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users')
    .subscribe(
      (users) => {
        this.users = users;
      }, 
      (error) => {
        console.log(error);
      }
    );
  }

  
}
