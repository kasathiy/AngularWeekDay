import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateServiceService } from 'src/app/service/authenticate-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {
  error:string;
  loginForm:FormGroup;
  constructor(public authenticateService:AuthenticateServiceService,
    public router:Router) { }

  ngOnInit() {
     this.loginForm = new FormGroup({
       username:new FormControl(null,Validators.required),
       password:new FormControl(null,[Validators.required,Validators.minLength(4)])       
     });
  }

  submit(){
    console.log("formInstance",this.loginForm);
    this.authenticateService.login(this.loginForm.value.username,
      this.loginForm.value.password).subscribe(()=>{
        this.router.navigate(['home','employeeList'])
      },()=>{
        this.error = "User Authentication failed";
      })
  }



}
