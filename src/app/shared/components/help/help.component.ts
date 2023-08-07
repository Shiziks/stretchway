import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  leftSign=faCaretLeft;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['/welcome']);
  }

}
