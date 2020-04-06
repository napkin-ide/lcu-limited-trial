import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Application } from '@lcu/common';

@Component({
  selector: 'lcu-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  /**
   * Application data
   */
  // tslint:disable-next-line:no-input-rename
  @Input('app-data')
  public AppData: Array<Application>;

  /**
   * Event emitter for selected application
   */
  // tslint:disable-next-line:no-output-rename
  @Output('selected-app')
  public SelectedApp: EventEmitter<Application>;

  constructor() {
    this.SelectedApp = new EventEmitter<Application>();
   }

  ngOnInit(): void {
  }

  /**
   * Event for when an app is selected
   *
   * @param app selected app
   */
  public SetActiveApp(app: Application): void {
    this.SelectedApp.emit(app);
  }
}