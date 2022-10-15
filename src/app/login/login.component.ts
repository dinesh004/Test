import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: "",
      password: ""
    });
  }


  submit(){
    this.service.loggedIn(this.form.value).subscribe((response: any)=>{
      console.log(this.form.value);
      console.log(response);

      // if (response.status == false){
      //   alert(response.message);
      //   return false;
      // }
       localStorage.setItem('data', response.data);
        this.router.navigate(['/welcome']);



        // localStorage.setItem('user', JSON.stringify(response.data));
        // console.log(localStorage.getItem('user'));
        // alert('login success')
        // this.toast.success({detail:"Success Message", summary:"Login Successfully", duration:5000})

        // alert("Login Successfully");
    }
    ,(error)=>{
      // this.toast.error({detail:"Error Message", summary:"Login Failed, Try again later !!", duration:5000})
      alert("Please Enter Correct Credential");
    }
    )
  }
  }
