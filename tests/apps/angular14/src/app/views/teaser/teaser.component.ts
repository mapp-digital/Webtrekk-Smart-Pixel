import { Component, OnInit } from '@angular/core';
import { WebtrekkTeaserProps } from '@webtrekk-smart-pixel/angular/lib/Directives/DataTypes';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html'
})
export class TeaserComponent implements OnInit {

  teaserTop: WebtrekkTeaserProps = {
    name: 'Teaser 0',
    rank: 'header',
    content: 'Teasertest',
    variant: 'demo',
    type: 'click',
    goal: 'order',
    value: '10%'
}
  teaserBottom: WebtrekkTeaserProps = {
    name: 'Teaser 1',
    rank: 'bottom',
    content: 'Teasertest',
    variant: 'demo',
    type: 'click',
    goal: 'order',
    value: '10%'
}

  constructor() { }

  ngOnInit(): void {
  }

}
