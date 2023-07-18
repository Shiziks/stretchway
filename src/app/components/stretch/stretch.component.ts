import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Area, Stretches } from 'src/app/interfaces/stretches';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-stretch',
  templateUrl: './stretch.component.html',
  styleUrls: ['./stretch.component.css']
})
export class StretchComponent implements OnInit {

  currentItem:number=0;
  len:number=0;
  rightSign= faCaretRight;
  leftSign=faCaretLeft;
  value:string='';
  url:string='/assets/data/stretches.json';
  data!:Area;
  dataAll!:Area[];
  side:string='RIGHT';
  sidesFlag:boolean=false;

  constructor(private activatedRoute:ActivatedRoute, 
    private stretchService:DataServiceService,
    private router:Router) { }

  ngOnInit(): void {
    let value:string='';
  //  this.activatedRoute.params.subscribe((val:any)=>{
  //     console.log(val.id);
  //     this.value=val.id;
  //   });

    this.stretchService.getStretchData().subscribe((data)=>{
      this.activatedRoute.params.subscribe((val:any)=>{
        console.log(val.id);
        value=val.id;
      });
      this.dataAll=data[value];
      console.log(data[value]);
      this.len=data[value].length;
      console.log(this.len);
      this.data=data[value][0];
      console.log(data[value][0]);
    });
  }

  goBack(){
    console.log("go back");
    this.router.navigate(['/welcome']);
  }

  toNextStretch(){
    if(this.currentItem< this.len-1){
      this.currentItem++;
      this.data=this.dataAll[this.currentItem];
    }
    else{
      this.currentItem=0;
      this.data=this.dataAll[this.currentItem];
    }
  }

  nextStretch(){
    if(this.data.sides && !this.sidesFlag){
      this.side="LEFT";
      this.sidesFlag=true;
    }
    else{
      this.sidesFlag=false;
      this.side="RIGHT";
      this.toNextStretch();
    }
  }

}
