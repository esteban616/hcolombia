import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  recaptcha: string="";
  fgValidation: FormGroup;

  constructor(private fb:FormBuilder, private secService:SecurityService,
    private router:Router) { 


  }
  fgValidationBuilder(){
    this.fgValidation=this.fb.group({
      username:['admin@gmail.com',[Validators.required,Validators.email,Validators.minLength(5),Validators.maxLength(40)]],
      password:['0123456789',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]]

    });
    
  }

  loginEvent(){
    
    if(this.fgValidation.invalid){
    alert("Datos invalidos")
  
    }else{
      let u = this.fg.username.value;
      let p = this.fg.password.value;
      let user=this.secService.loginUser(u,p);
      if(user!=null){
        this.router.navigate(['/home']);
      }

      
    }
  }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  resolved(captchaResponse: string){
    this.recaptcha=captchaResponse;

  }
  
  get fg(){
    return this.fgValidation.controls;
  }

}

