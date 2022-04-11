import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  options: FormGroup;
  floatLabelControl = new FormControl('auto');
  hideRequiredControl = new FormControl(false);
  hide = true;
  constructor(private apollo: Apollo, private router: Router, fb: FormBuilder) { 
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {    
  
    let val = localStorage.getItem('isValidUser')

    if(val != null && val == 'true'){
        this.router.navigate(['/user']);
    }
  }

  private LOGIN = gql`
  mutation
    loginUser(
      $username: String!, 
      $password: String!){
        login(
          username: $username, 
          password: $password){
            username
            password
            type
        }
      }
  `

  onSubmit(loginForm: any) {
    // console.log(contactForm.value);

    const username = loginForm.value["username"];
    const password = loginForm.value["password"];

    this.apollo.mutate({
      mutation: this.LOGIN,
      variables: {
          username: username,
          password: password,
      }
      }).subscribe(res => {
        if((res.data != null)){
          let obj = (res.data);
          console.log(obj);
          localStorage.setItem('isValidUser', "true");
          // localStorage.setItem('isValidUser', "true");
          // if()
          this.router.navigate(['/user']);
        }else{
          localStorage.setItem('isValidUser', "false");
          alert('Username or password invalid')
        }
      })
  }

  // onSearch(any){}

  username = new FormControl('', [Validators.required, Validators.minLength(4)]);
  // password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'Enter a valid username';
    }

    return this.username.hasError('email') ? 'Not a valid username' : '';
  }

  
}
