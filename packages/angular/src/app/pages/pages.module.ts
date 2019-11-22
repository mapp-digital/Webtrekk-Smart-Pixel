import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdvancedComponent } from './advanced.component';
import { CampaignComponent } from './campaign.component';
import { CustomerComponent } from './customer.component';
import { InitComponent } from './init.component';
import { OrderComponent } from './order.component';
import { PageComponent } from './page.component';
import { ProductViewComponent } from './product.view.component';
import { ProductBasketComponent } from './product.basket.component';
import { ProductConfirmationComponent } from './product.confirmation.component';
import { SessionComponent } from './session.component';
import { ContentEngagementComponent } from './content-engagement.component';
import { TeaserComponent } from './teaser.component';
import { ProductListComponent } from './product-list.component';

import { SharedModule } from "./../shared/shared.module";

const PagesRoutes: Routes = [
    {
        path: "pages",
        children: [
            {path: '', redirectTo: 'pages', pathMatch: 'full'},
            {path: 'advanced', component: AdvancedComponent},
            {path: 'campaign', component: CampaignComponent},
            {path: 'customer', component: CustomerComponent},
            {path: 'init', component: InitComponent},
            {path: 'order', component: OrderComponent},
            {path: 'page', component: PageComponent},
            {path: 'product-view', component: ProductViewComponent},
            {path: 'product-basket', component: ProductBasketComponent},
            {path: 'product-confirmation', component: ProductConfirmationComponent},
            {path: 'session', component: SessionComponent},
            {path: 'content-engagement', component: ContentEngagementComponent},
            {path: 'teaser', component: TeaserComponent},
            {path: 'product-list', component: ProductListComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(PagesRoutes),
        SharedModule
    ],
    declarations: [
        AdvancedComponent,
        CampaignComponent,
        CustomerComponent,
        InitComponent,
        OrderComponent,
        PageComponent,
        ProductViewComponent,
        ProductBasketComponent,
        ProductConfirmationComponent,
        SessionComponent,
        ContentEngagementComponent,
        TeaserComponent,
        ProductListComponent
    ],
    schemas: [],
    exports: [],
    providers: []
})
export class PagesModule {}