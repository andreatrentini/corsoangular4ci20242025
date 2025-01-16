import { Component, inject } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  private loginService: LoginService = inject(LoginService);
  private router: Router = inject(Router);

  logout(): void {
    this.loginService.logout();
  }

  annulla(): void {
    this.router.navigateByUrl('/');
  }
}
