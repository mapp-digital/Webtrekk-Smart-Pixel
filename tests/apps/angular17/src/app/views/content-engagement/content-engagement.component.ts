import { Component, OnInit } from '@angular/core';
import { WebtrekkContentEngagementProps } from '@webtrekk-smart-pixel/angular/lib/Directives/DataTypes';
import lorem from './lorem'

@Component({
  selector: 'app-content-engagement',
  templateUrl: './content-engagement.component.html'
})
export class ContentEngagementComponent implements OnInit {

  lorem = lorem;

  mappData: WebtrekkContentEngagementProps = {
    name: "Demo content",
    percentageStepsInAnalytics: 5,
    sendContentEngagement: 1,
    percentageReached: 25,
    secondsReached: 30,
    largeBrowserResolution: 1080,
    largeBrowserSeconds: 2,
    mediumBrowserResolution: 700,
    mediumBrowserSeconds: 2,
    smallBrowserResolution: 400,
    smallBrowserSeconds: 2,
}

  constructor() { }

  ngOnInit(): void {
  }

}
