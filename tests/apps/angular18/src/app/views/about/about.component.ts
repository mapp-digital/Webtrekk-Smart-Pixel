import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  private route = inject(ActivatedRoute);
  content: Content;

  constructor() {
    this.content = this.route.snapshot.data[0];
  }

  ngOnInit(): void {}
}
