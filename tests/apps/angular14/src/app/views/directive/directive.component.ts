import { Component, OnInit } from '@angular/core';
import {
  WebtrekkAdvancedProps,
  WebtrekkCampaignProps,
  WebtrekkContentEngagementProps,
  WebtrekkCustomerProps,
  WebtrekkInitProps,
  WebtrekkOrderProps,
  WebtrekkPageProps,
  WebtrekkProductListProps,
  WebtrekkProductProps,
  WebtrekkSessionProps,
  WebtrekkTeaserProps,
} from '@webtrekk-smart-pixel/angular/lib/Directives/DataTypes';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
})
export class DirectiveComponent implements OnInit {
  directiveList = [
    'init',
    'advanced',
    'page',
    'campaign',
    'customer',
    'product',
    'order',
    'session',
    'track',
    'product-list',
    'teaser',
    'content-engagement',
  ];

  init: WebtrekkInitProps = {
    trackId: '999999999999999',
    trackDomain: 'test.test',
    domain: 'sub.test.test',
    cookie: '3',
  };

  advanced: WebtrekkAdvancedProps = {
    // TODO: forceOldEverId missing in type
    secureCookie: true,
    optOutName: 'webtrekkTestOptOut',
    requestObfuscation: true,
    execCDB: false,
    useCDBCache: true,
    sendViaSDK: false,
    sendViaServer: {
      activated: false,
      serverDomain: 'testserver.test',
      serverPath: 'testserverpath',
      droppedRequests: 0,
      blacklist: ['abc'], // TODO: type needs to allow regex
    },
    useHashForDefaultPageName: true,
    useParamsForDefaultPageName: ['param1', 'param2'],
    requestQueue: {
      activated: true,
      ttl: 9999,
      resendInterval: 99999,
      size: 999,
      retries: -1,
      retriesOption: 1,
    },
    requestLimit: {
      activated: true,
      amount: 88,
      duration: 888,
    },
    userIdentification: {
      enableAnonymousFunction: true,
      anonymousCookieName: 'miCookieTestOptOut',
      anonymousOptIn: true,
      suppressParameter: ['ab,xy'], // TODO: doesnt work
    },
  };

  page: WebtrekkPageProps = {
    name: 'name',
    search: 'search',
    numberSearchResults: 7,
    errorMessages: 'errorMessages',
    paywall: true,
    articleTitle: 'articleTitle',
    contentTags: 'contentTags',
    title: 'title',
    type: 'type',
    length: 'length',
    daysSincePublication: 12,
    testVariant: 'testVariant',
    testExperiment: 'testExperiment',
    parameter: { 1: 'parameter foo', 2: 'parameter bar' },
    category: { 1: 'category foo', 3: 'category bar' },
    goal: { 1: 'goal foo', 4: 'goal bar' },
  };

  campaign: WebtrekkCampaignProps = {
    id: 'wt_mc%3Dfoo.bar',
    mediaCode: ['abc', 'def'],
    oncePerSession: true,
    parameter: { 1: 'foo', 2: 'bar' },
  };

  customer: WebtrekkCustomerProps = {
    id: 'test@tester.com',
    email: 'test@tester.com',
    emailRID: 'emailRID',
    emailOptin: true,
    firstName: 'test',
    lastName: 'tester',
    telephone: '0123456789',
    gender: 1,
    birthday: '19870913',
    country: 'germany',
    city: 'berlin',
    postalCode: '12345',
    street: 'test-street',
    streetNumber: '15A',
    validation: false,
    category: { 1: 'foo', 2: 'bar' },
  };

  product: WebtrekkProductProps = {
    id: 'product id 1',
    action: 'view',
    cost: 19.95,
    quantity: 1,
    variant: 'product variant',
    soldOut: false,
    category: { 1: 'category-1', 5: 'category-5' },
    parameter: { 1: 'parameter-1', 7: 'parameter-7' },
  };

  order: WebtrekkOrderProps = {
    value: 19.95,
    id: '123456789',
    currency: 'EUR',
    couponValue: 10,
    paymentMethod: '1',
    shippingService: '2',
    shippingSpeed: '3',
    shippingCosts: 2.75,
    grossMargin: 2.5,
    orderStatus: '5',
    parameter: { 1: 'foo', 2: 'bar' },
  };

  session: WebtrekkSessionProps = {
    loginStatus: 'logged in',
    parameter: { 1: 'foo', 2: 'bar' },
  };

  productList: WebtrekkProductListProps = {
    selector: '#product-list-element',
    id: 'product id 1',
    position: 2,
    cost: 19.95,
    quantity: 1,
    variant: 'product variant',
    soldOut: false,
    category: { 1: 'category-1', 5: 'category-5' },
    parameter: { 1: 'parameter-1', 7: 'parameter-7' },
  };

  teaser: WebtrekkTeaserProps = {
    selector: '#teaser-element',
    name: 'My products',
    rank: 'header',
    content: 'My products overview',
    variant: 'products',
    type: 'click',
    goal: 'order',
    value: '10%',
  };

  contentEngagement: WebtrekkContentEngagementProps = {
    selector: '#content-engagement-element',
    name: 'My Content',
    percentageStepsInAnalytics: 5,
    sendContentEngagement: 1,
    percentageReached: 50,
    secondsReached: 30,
    largeBrowserResolution: 1080,
    largeBrowserSeconds: 1,
    mediumBrowserResolution: 700,
    mediumBrowserSeconds: 1,
    smallBrowserResolution: 400,
    smallBrowserSeconds: 1,
  };

  onClick(directive: string) {
    this.activeDirective = directive;
  }

  activeDirective = 'none';

  constructor() {}

  ngOnInit(): void {}
}
