import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p><b>counter:</b> {{ counter }}</p>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="resetCounter()">reset</button>
  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 10

  increaseBy(num: number): void {
    this.counter += num
  }

  resetCounter(): void {
    this.counter = 0
  }
}

