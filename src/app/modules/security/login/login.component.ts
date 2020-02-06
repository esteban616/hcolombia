import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  recaptcha: string="";
  fgValidation: FormGroup;

  constructor(private fb:FormBuilder) { 


  }
  fgValidationBuilder(){
    this.fgValidation=this.fb.group({
      username:['',[Validators.required,Validators.email,Validators.minLength(5),Validators.maxLength(40)]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]]

    });
    
  }

  loginEvent(){
    if(this.fgValidation.invalid){
    alert("Datos invalidos")}else{
      alert("logueado")
      
    }
  }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  resolved(captchaResponse: string){
    this.recaptcha=captchaResponse;
    console.log(this.recaptcha)

  }
  
  get fg(){
    return this.fgValidation.controls;
  }

}

