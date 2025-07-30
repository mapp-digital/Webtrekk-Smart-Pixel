import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  content: Content;

  constructor() {
    this.content = this.route.snapshot.data[0];
  }

  ngOnInit(): void {}
}
