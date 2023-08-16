import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePAgeComponent } from './components/welcome-page/welcome-page.component';
import { IntroComponent } from './components/intro/intro.component';
import { StretchComponent } from './components/stretch/stretch.component';
import { HelpComponent } from './shared/components/help/help.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
    title: 'Intro'
  },
  {
    path: 'welcome',
    component: WelcomePAgeComponent,
    title: 'Welcome page'
  },
  {
    path: 'intro',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'stretch/:id',
    component: StretchComponent,
    title: 'Stretch page'
  },
  {
    path:'help',
    component: HelpComponent,
    title: "How to use this method"
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
