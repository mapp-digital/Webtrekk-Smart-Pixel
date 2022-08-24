import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { of, map, Observable, Subject, timer, merge } from 'rxjs';
import { concatMap, mapTo, switchMap } from 'rxjs/operators';
@Injectable()
export class SnackbarService {
  snackbar = new BehaviorSubject<string | null>(null);

  private timeout = 0;

  showMessage(message: string) {
    window.clearTimeout(this.timeout);
    this.snackbar.next(message);
    this.timeout = window.setTimeout(() => {
      this.snackbar.next(null);
    }, 2500);
  }

  //   public snackbar = new BehaviorSubject<string | null>(null);

  //   public showMessage(msg: string) {
  //     this.snackbar.next(msg);
  //   }

  //   constructor() {
  //     this.snackbar
  //     .pipe(concatMap((value) => merge(of(value), timer(4000))))
  //     .subscribe(() => {
  //         this.snackbar.next(null);
  //     });
  //   }
}
