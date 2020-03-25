import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      user_name: '',
      password: '',
      first_name: '',
      last_name: '',
      email: '',
    });
  }

  ngOnInit(): void {
  }

  get f() { return this.registerForm.controls; }

  onSubmit(registerInfo) {
    const user = new User();
    user.userName = registerInfo.user_name;
    user.password = registerInfo.password;
    user.firstName = registerInfo.first_name;
    user.lastName = registerInfo.last_name;
    user.email = registerInfo.email;
    this.userService.createUser(user).subscribe(req => this.router.navigate(['/landing/login']).then());
  }
}
