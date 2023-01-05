import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  isTrue: boolean | undefined;
  constructor(private formBuilder:FormBuilder, private router: Router, private sharedService:SharedServiceService) { }

  ngOnInit(): void {
    this.sharedService.isLoggedIn = false;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.isTrue =  true;
    this.sharedService.isLoggedIn = true;
    if(this.loginForm.value.username == "admin") {
      console.log('Admin');
      this.router.navigate(['/admin']);
      
    } else {
      console.log('normal user');
     // this.sharedService.isLoggedIn = true;
      this.router.navigate(['/landing']);
    }
  }

}