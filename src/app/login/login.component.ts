import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

import { User } from '../shared/user';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //declare variable
  loginForm: FormGroup;
  isSubmitted = false;
  error: string='';

  //user Object
  loginUser: User;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Create a Reactive Form
    this.loginForm=this.formBuilder.group({

      //FormControl Name
      userName: ['',[Validators.required]],
      password:  ['',[Validators.required]],
    });
  }
//Get all controls for validation
get formControls(){
  return this.loginForm.controls;
}

//
loginCredentials(){
  console.log(this.loginForm.value);
  this.isSubmitted = true;

  //form is invalid
if(this,this.loginForm.invalid){
  this.error="Sorry! Invalid entry... Try Again";

  return;

}
 //form is invalid
 if(this.loginForm.valid){

  //call webservice
  this.authService.loginVerify(this.loginForm.value)
    .subscribe(
      response=>{
       this.error='';
        console.log(response);

        sessionStorage.setItem('USERNAME',response.userName);
        sessionStorage.setItem('ACCESS_ROLE',response.roleId.toString());

        if(response==null){

          this.error="Invalid username and/or password";
        }

        //check the role and redirect to the respective component
        else if(response.roleId==1){
          this.router.navigateByUrl('/admin');
          console.log("Administrator");

        }else if(response.roleId==2){
          console.log("receptionist");
          this.router.navigateByUrl('/receptionist');
        }else if(response.roleId==3){
          console.log("doctor");
          this.router.navigateByUrl('/doctor');
          
        }else if(response.roleId==4){
          console.log("labtechnician");
          this.router.navigateByUrl('/labtechnician');
        
        }else if(response.roleId==4){
          console.log("pharmacist");
          this.router.navigateByUrl('/pharmacist');
        
        }
        
        
        
        else{

          this.error="Sorry...You are Not Allowed to Access the System"
        }
      },
       error=>{

        console.log(error);
        this.error='Sorry Invalid Username And Password';
       }

    )
 }

}
}