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
  Min:string = "";
  Max:string = "";

  constructor() { }

  ngOnInit() {
    this.Id = this.id||""
    this.Required = this.required?.toLowerCase() === "true"
    var date = new Date(Date.now())
    if (this.max?.startsWith("today")) {
      var day = date.getDate(), month = date.getMonth(), year = date.getFullYear()
      if (this.max.split("+")[1]) {
        let splitted = this.max.split("+")[1], amount = parseInt(splitted.slice(0, splitted.length-1)), type = splitted.slice(splitted.length-1)
        type=="y"?year += amount:type=="m"?month += amount:type=="d"?day += amount:undefined
      } else if (this.max.split("-")[1]) {
        let splitted = this.max.split("-")[1], amount = parseInt(splitted.slice(0, splitted.length-1)), type = splitted.slice(splitted.length-1)
        type=="y"?year -= amount:type=="m"?month -= amount:type=="d"?day -= amount:undefined
      } else {
        this.Max = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
      }
      this.Max = `${year}-${month<10?`0${month}`:month}-${day<10?`0${day}`:day}`
    } else if (this.max) {
      this.Max = this.max
    }
    if (this.min?.startsWith("today")) {
      var day = date.getDate(), month = date.getMonth(), year = date.getFullYear()
      if (this.min.split("+")[1]) {
        let splitted = this.min.split("+")[1], amount = parseInt(splitted.slice(0, splitted.length-1)), type = splitted.slice(splitted.length-1)
        type=="y"?year += amount:type=="m"?month += amount:type=="d"?day += amount:undefined
      } else if (this.min.split("-")[1]) {
        let splitted = this.min.split("-")[1], amount = parseInt(splitted.slice(0, splitted.length-1)), type = splitted.slice(splitted.length-1)
        type=="y"?year -= amount:type=="m"?month -= amount:type=="d"?day -= amount:undefined
      } else {
        this.Max = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
      }
      this.Min = `${year}-${month<10?`0${month}`:month}-${day<10?`0${day}`:day}`
    } else if (this.min) {
      this.Min = this.min
    }
  }

  isValidInput():boolean {
    const inputElement = document.querySelector('input[type="date"]') as HTMLInputElement;
    if (!inputElement || !inputElement.value) return false
    var dateMax = new Date(this.Max)
    var dateMin = new Date(this.Min)
    var dateReal = new Date(inputElement.value)
    if (dateReal.getTime()>dateMax.getTime() || dateReal.getTime()<dateMin.getTime()) return false
    return true
  }
}