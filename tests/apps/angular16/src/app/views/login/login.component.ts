import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  // Template driven approach
  login(formData: NgForm) {
    this.userService.login(formData.form.value);
  }

  // ReactiveForms approach
  registerForm: FormGroup = new FormGroup({
    'firstName': new FormControl(''),
    'lastName': new FormControl(''),
    'name': new FormControl(''),
    'password': new FormControl('')
  });
  register() {
    this.userService.register(this.registerForm.value); 
  }

  constructor(private userService: UserService) { }

}
