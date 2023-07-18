import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePAgeComponent } from './components/welcome-page/welcome-page.component';
import { StretchComponent } from './components/stretch/stretch.component';
import { IntroComponent } from './components/intro/intro.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CountdownModule } from 'ngx-countdown';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePAgeComponent,
    StretchComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    CountdownModule,
    HttpClientModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
