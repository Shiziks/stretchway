import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HelpComponent } from './components/help/help.component';
import { AppModule } from '../app.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent, 
    HelpComponent
  ]
})
export class SharedModule { }
