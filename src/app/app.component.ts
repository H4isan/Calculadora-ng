import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
  ngOnInit() {

  }
  clickRecivedFromSon(value: any){
    this.clickedButton += value;
    
  }
  clickClearFromSon(){
    this.clickedButton ="";
  }

}
