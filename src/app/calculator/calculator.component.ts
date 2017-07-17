import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    buttonsValue: any[] = [
    [
      {
        value: "9",
        color: "blue",
      },
      {
        value: "8",
        color: "blue",
      },
      {
        value: "7",
        color: "blue",
      },
      {
        value: "6",
        color: "blue",
      },
      {
        value: "5",
        color: "blue",
      },
      {
        value: "4",
        color: "blue",
      },
      {
        value: "3",
        color: "blue",
      },
      {
        value: "2",
        color: "blue",
      },
      {
        value: "1",
        color: "blue",
      },
      {
        value: "0",
        color: "blue",
      }
    ],
    [
      {
        value: "+",
        color: "yellow"
      },
      {
        value: "-",
        color: "yellow"
      },
      {
        value: "*",
        color: "yellow"
      },
      {
        value: "/",
        color: "yellow"
      }

    ]
  ];

  clickedButton: string = '';
  clickRecivedFromSon(value: any){
    this.clickedButton += value;
    
  }
  clickClearFromSon(){
    this.clickedButton ="";
  }

}
