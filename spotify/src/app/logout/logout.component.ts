import { Component, inject } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  loginService: LoginService = inject(LoginService);
}
