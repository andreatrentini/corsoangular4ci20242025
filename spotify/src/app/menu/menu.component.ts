import { Component, inject, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  // Inietto il servizio Spotify nel componente
  private spotifyService: SpotifyService = inject(SpotifyService);
  private loginService: LoginService = inject(LoginService);

  // Nel template HTML possono essere usati solo metodi e attributi della classe che definisce il componente
  tokenOk: Signal<boolean> = this.spotifyService.tokenOK;
  loginOk: Signal<boolean> = this.loginService.loginOk;

}
