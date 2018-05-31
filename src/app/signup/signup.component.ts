import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _http: HttpService) { }

  ngOnInit() {
 
  }

  register(form){
    console.log("user_data", form.value)
    this._http.register(form.value).subscribe(
      data => {

        console.log("token", data);
      },
      error=>{

        console.log("register Error", error);  
       }
    );
  }


}
