import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  
  user:any={
    firstname: '',
    lastname:'',
    phonenum:'',
    email:'',
    address1:'',
    address2:'',
    state:'',
    pinCode:''

    

  }
  regdata:any;
  constructor(private fb:FormBuilder) { }

userRegForm:any=this.fb.group({
firstName:['',[Validators.minLength(3),Validators.required]],
lastName:['',[Validators.required,Validators.minLength(3)]],
phonenum:['',[ Validators.required,
  Validators.pattern("^[0-9]*$"),
  Validators.minLength(8)]],
email:['',[Validators.required,Validators.email]],
address:this.fb.group({
      address1:['',[Validators.required]],
      address2:['',[Validators.required]],
      state:['',[Validators.required]], 
      pinCode:['',[Validators.required]],
     
    })  
})
 onSubmit(){
  this.user={
    firstname: this.firstName.value,
    lastname:this.lastName.value,
    phonenum:this.phonenum.value,
    email:this.email.value,
    address1:this.userRegForm.get(['address','address1']).value,
    address2:this.userRegForm.get(['address','address2']).value,
    state:this.userRegForm.get(['address','state']).value,
    pinCode:this.userRegForm.get(['address','pinCode']).value 
  }
    this.regdata= JSON.stringify(this.user)
   localStorage.setItem('regdata',this.regdata)
 }
 get firstName(){
   return this.userRegForm.get('firstName')
 }
 get lastName(){
   return this.userRegForm.get('lastName')
 }
 get phonenum(){
   return this.userRegForm.get('phonenum')
 }
 get email(){
   return this.userRegForm.get('email')
 }
 get address2(){
   return this.userRegForm.get(['address','address2'])
 }
 get state(){
  return this.userRegForm.get(['address','state'])
}
get pinCode(){
  return this.userRegForm.get(['address','pinCode'])
}

}

