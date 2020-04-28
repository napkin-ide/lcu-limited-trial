import { StateContext, Application, DAFApplicationConfig, DAFViewApplicationConfig } from '@lcu/common';
import { Injectable, Injector } from '@angular/core';
import { LimitedDataAppsManagementState } from './limited-data-apps-management.state';

@Injectable({
  providedIn: 'root'
})
export class LimitedDataAppsManagementStateContext extends StateContext<
  LimitedDataAppsManagementState
> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  public SaveAppView(view: DAFViewApplicationConfig) {
    this.Execute({
      Arguments: {
        View: view
      },
      Type: 'save-app-view'
    });
  }

  public SetActiveApp(app: Application) {
    this.Execute({
      Arguments: {
        App: app
      },
      Type: 'SetActiveApp'
    });
  }

  public SaveDAFApp(dafApp: any) {
    debugger;
    this.Execute({
      Arguments: {
        DAFApp: dafApp
      },
      Type: 'SaveDAFApp'
    });
  }

  public SaveDataApp(app: Application): void {
    debugger;
    this.Execute({
      Arguments: {
        App: app
      },
      Type: 'SaveDataApp'
    });
  }

  /**
   * Currently we aren't allowing deletes - dev use only
   * @param appID id of application to delete
   */
  public DeleteDataApp(appID: string): void {
    this.Execute({
      Arguments: {
        AppID: appID
      },
      Type: 'DeleteDataApp'
    });
  }

  /**
   * Toggle between adding and canceling a new app
   */
  public ToggleAddNew(addNew: boolean): void {
    this.Execute({
      Arguments: {
        New: addNew
      },
      Type: 'ToggleAddNew'
    });
  }

  //  Helpers
  protected defaultValue() {
    return { Loading: true } as LimitedDataAppsManagementState;
  }

  protected loadStateKey(): string {
    return 'data-apps';
  }

  protected loadStateName(): string {
    return 'limitedtrial';
  }
}
