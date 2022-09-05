import { Component, OnInit ,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-paina1',
  templateUrl: './paina1.component.html',
  styleUrls: ['./paina1.component.css']
})
export class Paina1Component 
  implements 
    OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
    AfterViewInit,AfterViewChecked,OnDestroy 
  {
  
  nombre:String = 'litos';  
  segundos: number = 0;
  timerSubscription!: Subscription;
  
  constructor() { 
    console.log('constructor');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription=interval(1000).subscribe(i=>{
      //console.log(i);
      this.segundos = i; 
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('gDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
  }

  guardar(){

  }

}
