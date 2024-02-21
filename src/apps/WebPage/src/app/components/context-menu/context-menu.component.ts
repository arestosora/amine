import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent {
  isVisible: boolean = false;
  menuPosition = { x: '0px', y: '0px' };

  constructor(private router:Router) { }

  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.isVisible = true;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const clickY = event.clientY;
    const clickX = event.clientX;
    const halfScreenHeight = screenHeight / 2;
    if (clickY > halfScreenHeight) {
      this.menuPosition.y = (clickY - 272) + 'px';
    } else {
      this.menuPosition.y = event.clientY + 'px';
    }
    const halfScreenWidth = screenWidth / 2;
    if (clickX > halfScreenWidth) {
      this.menuPosition.x = (clickX - 190) + 'px';
    } else {
      this.menuPosition.x = event.clientX + 'px';
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.isVisible) {
      this.isVisible = false;
    }
  }

  home() {
    this.router.navigate([""])
  }

  pricing() {
    this.router.navigate(["pricing"])
  }

  share() {
    
  }

  back() {
    window.history.back();
  }

  hideMenu() {
    this.isVisible = false;
  }
}