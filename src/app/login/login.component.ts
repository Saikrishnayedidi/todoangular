import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   signUpForm!: FormGroup; 
   userdata:any
   reg:any
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.signUpForm=new FormGroup({
      'email':new FormControl("",[Validators.required,Validators.email]),
      'password':new FormControl("",[Validators.required]),
    })
  } 

  onSubmit(){
    this.userdata=localStorage.getItem('regdata')
 this.reg=JSON.parse(this.userdata)
 
    if(this.email!.value==this.reg.email)
    {
      
      this.route.navigateByUrl('/todolist')
    }
  }
 
  get email(){
    return this.signUpForm.get('email') 
  }
  get password(){
    return this.signUpForm.get('password')
  }

}
