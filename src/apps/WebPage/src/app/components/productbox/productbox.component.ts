import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productbox',
  templateUrl: './productbox.component.html',
  styleUrls: ['./productbox.component.css']
})
export class ProductboxComponent {
  constructor(private router:Router) {}
  go(page:string) {
    this.router.navigate([page])
  }
}
