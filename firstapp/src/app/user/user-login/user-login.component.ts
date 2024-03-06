import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/AuthService.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthServiceService,private alertify:AlertifyService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(loginForm:NgForm)
  {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if (token)
    {
      localStorage.setItem('token', token.userName);
      this.alertify.success('Login successfully!')
      this.router.navigate(['/']);
    }
    else
    {
      this.alertify.error('Login NO successfull!')
      }
  }
}
