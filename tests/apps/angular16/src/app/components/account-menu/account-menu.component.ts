import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
})
export class AccountMenuComponent implements OnInit, OnDestroy {
  user: User | null = null;
  logout() {
    this.userService.logout();
    this.route.navigate(['login']);
  }

  subscription: Subscription | null = null;

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {
    this.subscription = this.userService.user.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
