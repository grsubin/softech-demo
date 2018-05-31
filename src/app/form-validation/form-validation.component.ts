import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  myForm:FormGroup;
  constructor() { }

  ngOnInit() {
    
    this.myForm = new FormGroup({

      'name': new FormControl('',[
        Validators.required
      ]),
      'email': new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(6)
          
      ])
    });

  }

}
