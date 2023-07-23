


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      userType: ['', Validators.required]
    });
  }

  ngOnInit() {
    // this.signupForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    //   mobile: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
    //   userType: ['', Validators.required]
    // });

    // this.initForm();
  }

  // initForm() {
  //   this.signupForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     mobile: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
  //     userType: ['', Validators.required]
  //   });
  // }

  onSubmit() {

    if (this.signupForm.valid) {
      const user = this.signupForm.value;
      const userType = user.userType;

      if(userType =='supplier') {
        const urlS = 'http://localhost:9002/user/register/supplier';

        this.http.post(urlS, user).subscribe(
          (response) => {
            console.log(response); // Show success message in the UI or redirect to a success page
          },
          (error) => {
            console.error(error); // Show error message in the UI or handle errors
          }
        );

      }else if(userType==='farmer') {

        const urlF = 'http://localhost:9002/user/register/farmer';

        this.http.post(urlF, user).subscribe(
          (response) => {
            console.log(response); // Show success message in the UI or redirect to a success page
          },
          (error) => {
            console.error(error); // Show error message in the UI or handle errors
          }
        );

      }else {
        const urlA = 'http://localhost:9002/admin/addUser';

        this.http.post(urlA, user).subscribe(
          (response) => {
            console.log(response); // Show success message in the UI or redirect to a success page
          },
          (error) => {
            console.error(error); // Show error message in the UI or handle errors
          }
        );
      }

    
    
    // Send the form data to the backend API
    // const url = 'http://localhost:9002/user/register/supplier';
    // const formData = this.signupForm.value;

    // this.http.post(url, formData).subscribe(
    //   (response) => {
    //     console.log(response); // Show success message in the UI or redirect to a success page
    //   },
    //   (error) => {
    //     console.error(error); // Show error message in the UI or handle errors
    //   }
    // );
    }
    alert("signup Completed...");
    this.router.navigateByUrl("/login");
  }

}
