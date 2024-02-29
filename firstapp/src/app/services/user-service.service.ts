import { Injectable } from '@angular/core';
import { User } from '../model/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }
 adduser(user:User)
  {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'))
      users = [...users,user];

    }
    else
    {
      users = [user];
      }


     localStorage.setItem('Users',JSON.stringify(users));
  }
}
