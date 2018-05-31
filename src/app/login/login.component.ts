import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormControl } from '@angular/forms';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createForm: FormGroup;
  
  userInfo:any;
  constructor(private _http: HttpService) {
    
   }

  ngOnInit() {

    this.createForm=new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  // loginFormSubmit(){
  //   console.log(this.createForm);
  // }

  login(){
    console.log("user input",this.createForm.value);
    this._http.login(this.createForm.value).subscribe(
      data =>{
        console.log("token",data);
      },
      error =>{
        console.log("error",error);
      }
    );
  }
}

