import { Component, Input } from '@angular/core';

type autocomplete = "off"|"name"|"given-name"|"additional-name"|"family-name"|"username"|"country-name"|""

@Component({
  selector: 'input-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class FormText {
  @Input() id:string|undefined;
  @Input() required:string|undefined;
  @Input() placeholder:string|undefined;
  @Input() validation:string|undefined;
  @Input() autocomplete:autocomplete|undefined;

  Id:string = "";
  Required:boolean = false;
  Placeholder:string = "";
  Autocomplete:autocomplete = "";

  constructor() { }

  ngOnInit() {
    this.Autocomplete = this.autocomplete||""
    this.Placeholder = this.placeholder||""
    this.Id = this.id||""
    this.Required = this.required?.toLowerCase() === "true"
  }

  isValidInput():boolean {
    const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
    const RegEx = new RegExp(this.validation||"")
    return inputElement ? RegEx.test(inputElement.value) : false
  }
}
