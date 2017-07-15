import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-componenet',
  templateUrl: './display-componenet.component.html',
  styleUrls: ['./display-componenet.component.css']
})
export class DisplayComponenetComponent implements OnInit {
  @Input() calculation;
  constructor() { }

  ngOnInit() {
  }

}
