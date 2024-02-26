import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'products-container',
  templateUrl: './productbox.component.html',
  styleUrls: ['./productbox.component.css']
})
export class ProductsContainer {
  constructor(private router:Router) {}
  go(page:string) {
    this.router.navigate([page])
  }
}
