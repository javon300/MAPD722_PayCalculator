import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
hourlyRate: any;
hoursWorked: any;
pay: any;
tax: any
overtimePay: any;
totalPay: any;
  // constructor() {}

  btnClicked(){
  
  
    if (this.hoursWorked <= 40)
    {
      this.pay = this.hourlyRate * this.hoursWorked
    }
    else{
      alert("overtime applies")

    this.overtimePay = (this.hoursWorked - 40) * this.hourlyRate*1.5 
    this.pay = this.overtimePay+ 40 * this.hourlyRate
    }
    this.totalPay=this.pay + this.overtimePay
    this.calcTax()
  }

  calcTax(){
    this.tax = this.pay *0.8
  }

}
