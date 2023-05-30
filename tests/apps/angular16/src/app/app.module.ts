import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { ThankYouComponent } from './views/thank-you/thank-you.component';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { ShopComponent } from './views/shop/shop.component';
import { LoginComponent } from './views/login/login.component';
import { ContentEngagementComponent } from './views/content-engagement/content-engagement.component';
import { TeaserComponent } from './views/teaser/teaser.component';
import { AccountComponent } from './views/account/account.component';
import { DirectiveComponent } from './views/directive/directive.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { AccountMenuComponent } from './components/account-menu/account-menu.component';
import { UserService } from './services/user.service';
import { ContentResolver } from './services/content-resolver.service';
import { ProductResolver } from './services/product-resolver.service';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartMenuComponent } from './components/cart-menu/cart-menu.component';
import { AuthGuard } from './services/auth-guard.service';
import { OrderProductListComponent } from './components/order-product-list/order-product-list.component';
import { WebtrekkSmartPixelModule } from '@webtrekk-smart-pixel/angular';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SnackbarService } from './services/snackbar.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ThankYouComponent,
    HomeComponent,
    ProductComponent,
    ShopComponent,
    LoginComponent,
    ContentEngagementComponent,
    TeaserComponent,
    AccountComponent,
    DirectiveComponent,
    HeaderComponent,
    CartComponent,
    ProductListComponent,
    ProductPreviewComponent,
    AccountMenuComponent,
    CartItemComponent,
    CartMenuComponent,
    OrderProductListComponent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebtrekkSmartPixelModule.forRoot({
      trackId: '123123123123123',
      trackDomain: 'phoenix:4001',
      activateAutoTracking: true,
      activateActions: true,
      activateTeaser: true,
      activateProductList: true,
      activateContentEngagement: true
  })
  ],
  providers: [DataService, UserService, CartService, ContentResolver, ProductResolver, AuthGuard, SnackbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
