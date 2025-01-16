import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CreditsComponent } from './credits/credits.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { tokenOkGuard } from './token-ok.guard';
import { TracksComponent } from './tracks/tracks.component';
import { LogoutComponent } from './logout/logout.component';
import { loginGuard } from './login.guard';
import { logoutGuard } from './logout.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: SearchComponent, canActivate: [tokenOkGuard, loginGuard]},
    {path: 'credits', component: CreditsComponent},
    {path: 'login', component: LoginComponent, canActivate: [logoutGuard]},
    {path: 'logout', component: LogoutComponent, canActivate: [loginGuard]},
    {path: 'albums/:id', component: AlbumsComponent, canActivate: [tokenOkGuard, loginGuard]},
    {path: 'tracks/:id', component: TracksComponent, canActivate: [tokenOkGuard, loginGuard]},
    {path: '**', component: NotFoundComponent}
];
