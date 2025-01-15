import { Component, inject, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginService: LoginService = inject(LoginService);
  errorFeedback: Signal<boolean> = this.loginService.errorFeedback;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  })

  login(): void {
    this.loginService.login(this.loginForm.value);
    
  }
}
