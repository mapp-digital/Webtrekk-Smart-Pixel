import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  content: Content = this.route.snapshot.data[0];
  constructor(private route: ActivatedRoute) {}
}
