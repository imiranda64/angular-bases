import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter:{{counter}}</h3>

    <button (click)="increaseBy(1)" >+1</button>
    <button (click)="resetCounter(10)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
        
    `
})

export class CounterComponent {
    public counter:number = 10;

    constructor() {
     }

     increaseBy(value:number){
        this.counter+= value;
     }

    resetCounter(value:number)
    {
        this.counter =value;
    }       

}