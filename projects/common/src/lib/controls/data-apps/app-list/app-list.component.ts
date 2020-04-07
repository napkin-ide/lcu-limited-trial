import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Application } from '@lcu/common';
import { LimitedDataAppsManagementStateContext } from '../../../state/data-apps/limited-data-apps-management-state.context';
import { LimitedDataAppsManagementState } from '../../../state/data-apps/limited-data-apps-management.state';

@Component({
  selector: 'lcu-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  public SelectedAppName: string;
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

  /**
   * Data Apps state data
   */
  public State: LimitedDataAppsManagementState;

  constructor(protected state: LimitedDataAppsManagementStateContext) {
    this.SelectedApp = new EventEmitter<Application>();
   }

  public ngOnInit(): void {
    /**
     * Listen for state changes
     */
    this.state.Context.subscribe((state: any) => {
      this.State = state;

      this.handleStateChanges();
    });
  }

  /**
   * Event for when an app is selected
   *
   * @param app selected app
   */
  public SetActiveApp(app: Application): void {

    // this.SelectedAppName = app.Name;
    this.SelectedApp.emit(app);
  }

  /**
   * Listen for state changes
   */
  protected handleStateChanges(): void {
    
  }
}
