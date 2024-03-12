import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.css']
})
export class DiscordComponent {
  isPlus:boolean = false;

  @Input() months:string|undefined;
  @Input() access:"vip"|"vip+"|"normal"|undefined;
  constructor() {}

  ngOnInit() {
    if (this.months && !isNaN(parseInt(this.months))) {
      const monthsElement = document.querySelector('span#dd-months') as HTMLSpanElement;
      monthsElement.innerHTML = `${this.months} month${parseInt(this.months)>1?"s":""}`
    }
    if (this.access == "vip+") {
      this.isPlus = true
    }
  }
}
