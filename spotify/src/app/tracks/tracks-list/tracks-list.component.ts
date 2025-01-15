import { Component, input, InputSignal } from '@angular/core';
import { Tracks } from '../../i-tracks';
import { withNavigationErrorHandler } from '@angular/router';

@Component({
  selector: 'app-tracks-list',
  standalone: true,
  imports: [],
  templateUrl: './tracks-list.component.html',
  styleUrl: './tracks-list.component.css'
})
export class TracksListComponent {
  tracks: InputSignal<Tracks | undefined> = input.required<Tracks | undefined>();

  getDuration(duration: number): string {
    let totale: number = Math.round(duration / 1000);
    let minuti: number = Math.floor(totale / 60);
    let secondi: number = Math.round(totale % 60);
    /* let secondiCorretti: string = secondi.toString();
    if (secondi < 10) {
      secondiCorretti = '0' + secondiCorretti;
    } */

    let secondiCorretti: string = secondi < 10? '0' + secondi.toString(): secondi.toString();
    return `${minuti}:${secondiCorretti}`;
  }
}
