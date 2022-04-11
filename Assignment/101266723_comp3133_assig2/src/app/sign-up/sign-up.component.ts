import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

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
  }


  private ADD_USER = gql`
  mutation
    newUser(
      $username: String!,
      $firstname: String!,
      $lastname: String!,
      $password: String!,
      $email: String!,
      $type: String!){
          addUser(
            username: $username,
            firstname: $firstname,
            lastname: $lastname,
            password: $password,
            email: $email,
            type: $type){
              username
              firstname
              lastname
          }
      }
  `

  onSubmit(createForm:any) {
    console.log(createForm.value);
    this.apollo.mutate({
      mutation: this.ADD_USER,
      variables: {
        username: createForm.value["username"],
        firstname: createForm.value["firstname"],
        lastname: createForm.value["lastname"],
        password: createForm.value["password"],
        email: createForm.value["email"],
        type: createForm.value["type"]
      }
      }).subscribe(res => {
        if(!(res.data == null)){
          let obj = res.data
          console.log(obj)
        }else{
          console.log(res.data)
        }
      })
  }

  username = new FormControl('', [Validators.required]);
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  type = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
