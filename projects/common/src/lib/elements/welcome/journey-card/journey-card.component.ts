import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lcu-journey-card',
  templateUrl: './journey-card.component.html',
  styleUrls: ['./journey-card.component.scss']
})
export class JourneyCardComponent implements OnInit {

  protected _data: {};

  @Input('data')
  set Data(val: {}) {
    this._data = val;
  }
  get Data(): {} {
    return this._data;
  }

  constructor() {
    console.log(this.Data);
  }

  ngOnInit(): void {
  }

}
