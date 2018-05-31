import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { Demo } from 'src/app/model/demo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Demo;
  data:any;
  results = '';
  constructor(private _demo:DemoService, private http: HttpClient, private _http:HttpService) { 
    this.user= new Demo;
  }

  ngOnInit() {

    this.data = this._demo.getInfo();
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(dataa => {
      console.log(dataa);
    });

    this._http.getUserInfo().subscribe(
      data =>{

        
        this.user.login=data.login;
        this.user.bio= data.bio;
        this.user.company=data.company;
        this.user.avatar_url=data.avatar_url;
        console.log("user", this.user);
        console.log("data",data);
      },
      error =>{
        
        console.log("error", error);
      }
    );
  }
  }
  

