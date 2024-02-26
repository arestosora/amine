import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePage {
  constructor(private router:Router) {}

  go(page:string) {
    this.router.navigate([`${page}`])
  }
}
