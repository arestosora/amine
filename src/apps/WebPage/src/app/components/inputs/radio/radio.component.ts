import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class InputRadio {
  @Input() id: string|undefined;
  @Input() name: string|undefined;
  @Input() required:string|undefined;
  
  Name:string = "";
  Required:boolean = false;
  Id:string = ""

  constructor() {}

  ngOnInit(){
    this.Id = this.id||""
    this.Required = this.required?.toLowerCase()==="true"
    this.Name = this.name||""
  }
}
