import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private route: Router) {}

  isLoggedIn(): Observable<boolean | UrlTree> {
    return this.userService.checkLoginStatus()
    .pipe(
         switchMap((status) => {
             if (status.status === 'logged in') {
               return of(true);
             } else {
               this.userService.logout();
               this.route.navigate(['login']);
               return of(false);
             }
         })
    );
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.isLoggedIn();
  }
}
