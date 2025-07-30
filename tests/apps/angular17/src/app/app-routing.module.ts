import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { ContentResolver } from './services/content-resolver.service';
import { ProductResolver } from './services/product-resolver.service';
import { AboutComponent } from './views/about/about.component';
import { AccountComponent } from './views/account/account.component';
import { ContentEngagementComponent } from './views/content-engagement/content-engagement.component';
import { DirectiveComponent } from './views/directive/directive.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProductComponent } from './views/product/product.component';
import { ShopComponent } from './views/shop/shop.component';
import { TeaserComponent } from './views/teaser/teaser.component';
import { ThankYouComponent } from './views/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: [ContentResolver],
  },
  {
    path: 'shop/:id',
    component: ProductComponent,
    resolve: [ProductResolver],
  },
  {
    path: 'shop',
    component: ShopComponent,
    resolve: [ContentResolver, ProductResolver],
  },
  {
    path: 'about',
    component: AboutComponent,
    resolve: [ContentResolver],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'content-engagement',
    component: ContentEngagementComponent,
  },
  {
    path: 'teaser',
    component: TeaserComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'thankyou',
    component: ThankYouComponent,
  },
  {
    path: 'directives',
    component: DirectiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
