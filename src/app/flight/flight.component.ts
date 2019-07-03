import { Component, OnInit } from '@angular/core';
import { People } from '../people/people';
import { Router } from '@angular/router';
 //import {People}from './people';
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']

  
})
export class FlightComponent implements OnInit {
    people:People[];
    amount1= 1000;
    amount2 = 2000;
    amount3 = 3000;
    flightAmount;
    flightType;
       
    public ProductHeader = [{name:''},{ name: 'Johannesburg' }, { name: 'Pretoria'}, { name: 'Durban' }, { name: 'Cape town' }]; 
   
     openForm() {
      document.getElementById("myForm").style.display = "block";
    }

    
     closeForm() {
      document.getElementById("myForm").style.display = "none";
    }
    //getting selected from location
from:string='';
fromChangeHandler(event:any){
  this.from=event.target.value;
}
 //getting selected to location
 to:string='';
 toChangeHandler(event:any){
   this.to=event.target.value;
 }
 //getting selected class
 class:string='';
 classChangeHandler(event:any){
   this.class=event.target.value;

   if(this.class == "Economy class" )
   {  this.flightAmount = this.amount1;      }     
    else if(this.class == "Business class")
   {  this.flightAmount = this.amount2; } 
   else if (this.class == "First class")
   {  this.flightAmount = this.amount3; }
   else{
     this.flightAmount=0;
   }
   
 }
      //getting selected child
      public child:number;
      childChangeHandler(event:any){
        this.child=event.target.value;
      }
      total;
      //getting selected class
      public adults:number;
      adultChangeHandler(event:any){
        this.adults=event.target.value;
        if(this.adults==1){
          this.total=this.flightAmount*1;
        }
        else if(this.adults==2){
          this.total=this.flightAmount*2;
        }
        else if(this.adults==3){
          this.total=this.flightAmount*3;
        }
        else{this.total=0}
      }
      //getting selected type of trip
      trip:string='';
      tripChangeHandler(event: any){
        this.trip=event.target.value;
      }
      //getting selected date to go
      depart:string='';
      departChangeHandler(event: any){
        this.depart=event.target.value;
      }
      //getting selected date to return
      return:string='';
      returnChangeHandler(event: any){
        this.return=event.target.value;
      }

      //prices calculatios




  ngOnInit() {
   

  }

}
