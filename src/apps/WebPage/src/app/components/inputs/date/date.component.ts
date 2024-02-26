import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  @Input() id:string|undefined;
  @Input() required:string|undefined;
  @Input() max:string|undefined;
  @Input() min:string|undefined;

  Id:string = "";
  Required:boolean = false;

  constructor() { }

  ngOnInit() {
    this.Id = this.id||""
    this.Required = this.required?.toLowerCase() === "true"
  }

  isValidInput():boolean {
    const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (this.max?.startsWith("today")) {
      if (this.max.split("+")[1]) {

      }
      else if (this.max.split("-")[1]) {
        
      } else {

      }
    }
    if (this.min?.startsWith("today")) {
      if (this.max.split("+")[1]) {

      }
      else if (this.max.split("-")[1]) {
        
      } else {
        
      }
    }
    return false
  }
}