import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePAgeComponent } from './components/welcome-page/welcome-page.component';
import { IntroComponent } from './components/intro/intro.component';
import { StretchComponent } from './components/stretch/stretch.component';

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
  // {
  //   path: '**',
  //   //404 page
  // },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
