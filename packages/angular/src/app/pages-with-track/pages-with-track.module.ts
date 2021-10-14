import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AllComponent } from './all.component';
import { NestedComponent } from './nested.component';
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

import { SharedModule } from "./../shared/shared.module";

const PagesWithTrackRoutes: Routes = [
    {
        path: "pages-with-track",
        children: [
            {path: '', redirectTo: 'pages-with-track', pathMatch: 'full'},
            {path: 'all', component: AllComponent},
            {path: 'nested', component: NestedComponent},
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
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(PagesWithTrackRoutes),
        SharedModule
    ],
    declarations: [
        AllComponent,
        NestedComponent,
        AdvancedComponent,
        CampaignComponent,
        CustomerComponent,
        InitComponent,
        OrderComponent,
        PageComponent,
        ProductViewComponent,
        ProductBasketComponent,
        ProductConfirmationComponent,
        SessionComponent
    ],
    schemas: [],
    exports: [],
    providers: []
})
export class PagesWithTrackModule {}