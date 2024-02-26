import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header {
  constructor(private router:Router) {}

  go(page:string) {
    this.router.navigate([`${page}`])
  }
}
