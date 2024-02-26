import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class InputCheckbox {
  @Input() id: string|undefined;
  @Input() required: string|undefined;

  Id: string = ""
  Required: boolean = false

  constructor() { }

  ngOnInit() {
    this.Required = this.required?.toLowerCase() === 'true';
    this.Id = this.required||""
  }
}
