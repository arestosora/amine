import { Component, Input} from '@angular/core';

@Component({
  selector: 'product-giveaways',
  templateUrl: './giveaways.component.html',
  styleUrls: ['./giveaways.component.css']
})
export class GiveawaysComponent {
  @Input() months:string|undefined;

  Months:number = 1;
  constructor() {}

  ngOnInit() {
    if (!this.months || isNaN(parseInt(this.months))) {
      this.Months = 1
    } else {
      this.Months = parseInt(this.months)
    }
    const monthsElement = document.querySelector('span#gw-months') as HTMLSpanElement;
    if (monthsElement) {
      monthsElement.innerHTML = `${this.Months} month${this.Months>1?"s":""}`
    }
  }
}
