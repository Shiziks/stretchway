import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo:boolean=true;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event:any)=>{
      if(event instanceof NavigationEnd){
        console.log(event.url);
        if(event.url=='/'||event.url=='/intro'){
          this.logo=false;
        }
        else{
          this.logo=true;
        }
      }
    });
  
    
  }

}
