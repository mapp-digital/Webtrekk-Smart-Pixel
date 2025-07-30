import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  content: Content = this.route.snapshot.data[0];
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}

}
