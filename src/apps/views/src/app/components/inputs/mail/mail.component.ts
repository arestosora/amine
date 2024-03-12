import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class FormMail {
  @Input() required: string|undefined;
  @Input() validate: string|undefined;
  @Input() placeholder: string|undefined;
  @Input() id: string|undefined;
  
  Required: boolean = false
  Validate: boolean = false
  Placeholder: string = ""
  Id: string = ""

  constructor() { }

  ngOnInit() {
    this.Required = this.required?.toLowerCase()==="true"
    this.Validate = this.validate?.toLowerCase()==="true"
    this.Placeholder = this.placeholder||""
    this.Id = this.id||""
  }

  isValidInput(): boolean {
    const inputElement = document.querySelector('input[type="email"]') as HTMLInputElement;
    const RegEx = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
    return inputElement ? inputElement.validity.valid ? RegEx.test(inputElement.value) : false : false;
  }
}