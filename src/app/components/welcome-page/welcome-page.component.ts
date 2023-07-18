import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePAgeComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
  }

  bodyPart(val:string){
    console.log(val);
    let nextUrl:string='/stretch/'+val;
    console.log(nextUrl);
    this.router.navigate([nextUrl]);
  }
}
