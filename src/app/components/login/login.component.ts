import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  submit(formInstance) {
    console.log("FormInstance",formInstance);

    console.log(formInstance.value.username,formInstance.value.password);
  }
}
