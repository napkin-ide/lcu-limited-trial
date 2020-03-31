import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Application } from '@lcu/common';

@Component({
  selector: 'lcu-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  /**
   * local variable for app data getter/setter
   */
  private _appData: Array<Application>;

  // tslint:disable-next-line:no-input-rename
  @Input('app-data')
  set AppData(val: Array<Application>) {
    this._appData = val;

    this.separateAppTypes();
  }

  get AppData(): Array<Application> {
    return this._appData;
  }

  // tslint:disable-next-line:no-input-rename
  @Input('app-type')
  public AppType: string;

  // tslint:disable-next-line:no-output-rename
  @Output('selected-app')
  public SelectedApp: EventEmitter<Application>;

  public PublicDataSource: Array<Application>;

  public PrivateDataSource: Array<Application>;

  constructor() {
    this.SelectedApp = new EventEmitter<Application>();
   }

  ngOnInit(): void {
  }

  public SetActiveApp(app: Application): void {
    this.SelectedApp.emit(app);
  }

  protected separateAppTypes(): void {
    this.PublicDataSource = this.AppData.filter( (itm: Application) => {
      return itm.IsPrivate === false;
    });

    this.PrivateDataSource = this.AppData.filter( (itm: Application) => {
      return itm.IsPrivate === true;
    });
  }
}
