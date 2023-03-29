import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit, OnDestroy {
  userData: User | null = null;
  private subscription: Subscription | null = null;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscription = this.userService.user.subscribe((user) => {
      if (user) {
        this.userData = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
