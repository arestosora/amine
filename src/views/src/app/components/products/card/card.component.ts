import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() type: "gold" | "silver" | "copper" | undefined;
  @Input() price: string | undefined;
  constructor(private readonly fetchService: FetchService, private readonly router: Router) { }


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

  buy(email: string) {
    this.fetchService.checkoutBronzePlan(email).subscribe((response) => {
      this.router.navigateByUrl(response.url);
    });
  }

}
