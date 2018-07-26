import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
rooturi:any="http://numbersapi.com/";
given:number;
res:string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    
  }
fetchData(){
this.http.get(`http://numbersapi.com/${this.given}`,{responseType: 'text'}).subscribe(res=>{
  this.res=res;
  
})
  
}
}
