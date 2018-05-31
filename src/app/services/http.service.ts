import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config.config';
import { Demo } from 'src/app/model/demo.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService { 

  constructor(private _http:HttpClient) { }
  getUserInfo(){
    

        return this._http.get<Demo>(Config.serverURL);
        // this._http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
        //   console.log(data.login);
        //   console.log(data.bio);
        //   console.log(data.company);
        // });
      
      }

  register(value){
    return this._http.post(Config.registerURL, value);
  }

  login(value){
    return this._http.post(Config.loginURL, value);
  }
    
    
    }

    
