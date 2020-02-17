import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userInfo= new BehaviorSubject<UserModel>(new UserModel());

  constructor() { }

  getUserInfo(){
    return this.userInfo.asObservable();
  }

  loginUser(username:String,pass:String){
    let user=null;
    if(username=="admin@gmail.com" && pass=="0123456789"){
      user=new UserModel();
      user.firstName='Admin';
      user.lastName='Admin';
      user.firstlastName='Admin';
      user.secondName='Admin';
      user.email='Admin';
      user.isLogged=true;
      user.rol='gerente';
      this.userInfo.next(user);
    }

    return user;
  }
}
