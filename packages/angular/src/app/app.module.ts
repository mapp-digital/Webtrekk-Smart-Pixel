import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { PagesModule } from './pages/pages.module';
import { PagesWithTrackModule } from './pages-with-track/pages-with-track.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from "./shared/shared.module";

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "pages",
                loadChildren: "./pages/pages.module#PagesModule"
            },
            {
                path: "pages-with-track",
                loadChildren: "./pages-with-track/pages-with-track.module#PagesWithTrackModule"
            }
        ]
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        SharedModule,
        BrowserModule.withServerTransition({
            appId: 'ng-universal-demystified'
        }),
        AppRoutingModule,
        PagesModule,
        PagesWithTrackModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
