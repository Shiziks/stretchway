import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit, OnDestroy {

  navBar:boolean=true;

  constructor(private router:Router, @Inject(DOCUMENT) private _doc: any) { }

  ngOnInit(): void {
    this._doc.body.classList.add('gradient');
    setTimeout(()=>{
      this.router.navigate(['/welcome']);
    },3000);
  }

  ngOnDestroy(){
    this._doc.body.classList.remove('gradient');
    this.navBar=false;
  }

}
