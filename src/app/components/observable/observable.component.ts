import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  customObsSubscription: Subscription;
  customObsSubscription1: Subscription;
  customObsSubscription2: Subscription;
  customObsSubscription3: Subscription;
  constructor() { }

  ngOnInit() {
    const myObservable = Observable.create(function(observer:Observer<String>){
      setTimeout(() => {
        observer.next("first package");
      }, 2000);
      setTimeout(() => {
        observer.next("second package");
      }, 4000);
      setTimeout(() => {
        observer.next("third package");
      }, 6000);
      setTimeout(() => {
        //observer.error("this does not work");
        observer.complete();
      }, 8000);
      setTimeout(() => {
        observer.next("fourth package");
      }, 10000);

    });

    this.customObsSubscription = myObservable.subscribe((data)=>{
       console.log("Received Data",data);
    },(error)=>{
      console.log("error",error);
    },()=>{
      console.log("complete");
    });


    this.customObsSubscription1 =myObservable.subscribe((data)=>{
      console.log("Received Data",data);
   },(error)=>{
     console.log("error",error);
   },()=>{
     console.log("complete");
   });

   this.customObsSubscription2 = myObservable.subscribe((data)=>{
    console.log("Received Data",data);
 },(error)=>{
   console.log("error",error);
 },()=>{
   console.log("complete");
 });
  }

  ngOnDestroy(){
    this.customObsSubscription.unsubscribe();
    this.customObsSubscription1.unsubscribe();
    this.customObsSubscription2.unsubscribe();
  }
}
