import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons-component',
  templateUrl: './buttons-component.component.html',
  styleUrls: ['./buttons-component.component.css']
})
export class ButtonsComponentComponent implements OnInit {
  @Input() buttonsValue;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() buttonClear: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  readEvent(keytouched: string) {
    this.buttonClicked.emit(keytouched);

  }
    setClear() {
      this.buttonClear.emit();
  }
}
