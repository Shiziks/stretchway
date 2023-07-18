import { Injectable } from '@angular/core';
import { Stretches } from '../interfaces/stretches';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private dataSource= new Subject();
  public data= this.dataSource.asObservable();
  url:string='/assets/data/stretches.json';


  constructor(private http: HttpClient) { }

  getStretchData():Observable<any>{
   return this.http.get(this.url);
  }
}
