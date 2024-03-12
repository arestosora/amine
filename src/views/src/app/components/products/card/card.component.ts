import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {  
  @Input() type:"gold"|"silver"|"copper"|undefined;
  @Input() price:string|undefined;
  constructor() {}

  ngOnInit() {
    const container = document.querySelector('div#card.default') as HTMLDivElement;
    const name = document.querySelector('#name') as HTMLSpanElement;
    const price = document.querySelector('#price') as HTMLSpanElement;
    
    if (this.type) {
      container.className = this.type
      name.innerHTML = this.type.toUpperCase()
    }
    if (this.price && !isNaN(parseInt(this.price))) {
      price.innerHTML = this.price
    }
  }

  buy() {
    
  }
}
