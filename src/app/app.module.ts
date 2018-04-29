import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { AdvancedHighlightDirective } from './directives/advanced-highlight.directive';
import { HoverDirective } from './directives/hover.directive';
const appRoutes:Routes =[
  {path:'cockpit',component:CockpitComponent},
  {path:'server',component:ServerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CockpitComponent,
    HighlightDirective,
    AdvancedHighlightDirective,
    HoverDirective

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
