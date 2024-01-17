import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, signal } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    //before render
    // run once
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomthing();
    }
    
  }

  ngOnInit() {
    //after render
    //run once
    //async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counter.set(100);
    // this.counterRef = window.setInterval(() => {
    //   console.log('run interval');
    //   this.counter.update(statePrev => statePrev + 1);
    // },1000)
  }

  ngAfterViewInit() {
    //after render
    //children were rendering
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    //
    console.log('ngOnDestroy');
    // console.log('-'.repeat(10));
    // window.clearInterval(this.counterRef)
  }

  doSomthing() {
    console.log('change duration');
    
  }
}
