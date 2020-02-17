import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/models/user.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userInfo:UserModel;
  userName:String;
  userLogged:boolean=false;
  subscription:Subscription;

  constructor(private secService:SecurityService) {
   

   }

  ngOnInit() { 
    this.isSessionLogged();
  }

  isSessionLogged(){
    this.subscription= this.secService.getUserInfo().subscribe(user =>{
      this.userInfo=user;
      this.updateInfo();

    });    
  }
  updateInfo(){
    this.userLogged=this.userInfo.isLogged;
    this.userName=`${this.userInfo.firstName} ${this.userInfo.rol}`

}

}