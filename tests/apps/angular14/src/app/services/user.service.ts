import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';
import { WebtrekkSmartPixelAngular } from '@webtrekk-smart-pixel/angular';
@Injectable()
export class UserService {
  private userURL = 'https://phoenix:4001/user';
  public user = new ReplaySubject<User | null>();

  constructor(
    private http: HttpClient,
    private route: Router,
    private snackbar: SnackbarService,
    private pixel: WebtrekkSmartPixelAngular
  ) {
    this.checkLoginStatus().subscribe((status) => {
      if (status.status === 'logged in') {
        this.completeLogin(false);
      }
    });
  }

  public logout() {
    this.http
      .get<{ message?: string }>(this.userURL + '/logout', {
        withCredentials: true,
      })
      .pipe(catchError(this.handleNotAuthorized.bind(this)))
      .subscribe((resp) => {
        if (resp?.message === 'logged out') {
          this.user.next(null);
          this.snackbar.showMessage('Logout successful');
          this.route.navigate(['login']);
        }
      });
  }

  public login(params: { name: string; password: string }) {
    this.http
      .get<{ message?: string; token?: string }>(`${this.userURL}/login`, {
        withCredentials: true,
        params,
      })
      .pipe(catchError(this.handleNotAuthorized.bind(this)))
      .subscribe((response) => {
        if (response.hasOwnProperty('token')) {
          this.snackbar.showMessage(`Hello ${params.name}, welcome back!`);
          this.pixel.customer(params.name);
          this.pixel.action('Login');
          this.pixel.trackAction();
          this.completeLogin();
        }
      });
  }

  public register(params: {
    name: string;
    password: string;
    firstName?: string;
    lastName?: string;
  }) {
    this.http
      .post<{ message?: string; token?: string }>(
        `${this.userURL}/register`,
        params,
        {
          withCredentials: true,
        }
      )
      .pipe(catchError(this.handleNotAuthorized.bind(this)))
      .subscribe((response) => {
        if (response.hasOwnProperty('token')) {
          this.completeLogin();
          this.snackbar.showMessage('Registration successful! Welcome!');
        }
      });
  }

  checkLoginStatus() {
    return this.http
      .get<{ status: string }>(this.userURL + '/check', {
        withCredentials: true,
      })
      .pipe(catchError(this.handleNotAuthorized.bind(this)));
  }

  private getUser(): Observable<User> {
    return this.http
      .get<User>(this.userURL, { withCredentials: true })
      .pipe(catchError(this.handleNotAuthorized.bind(this)));
  }

  public updateUser() {
    this.getUser().subscribe((user) => {
      this.user.next(user);
    });
  }

  private completeLogin(redirectToAccount = true) {
    this.getUser().subscribe((user) => {
      this.user.next(user);
      if (redirectToAccount) {
        this.route.navigate(['account']);
      }
    });
  }

  private handleNotAuthorized(error: any) {
    if (error?.error?.message === 'Unauthorized') {
      this.user.next(null);
      return throwError(() => {});
    }
    let errorMessage = '';
    this.snackbar.showMessage('An error occured');
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
