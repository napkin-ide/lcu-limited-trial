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

  public SaveDAFApp(dafApp: DAFApplicationConfig) {
    this.Execute({
      Arguments: {
        DAFApp: dafApp
      },
      Type: 'SaveDAFApp'
    });
  }

  // leave id null and it will create a new one
  public SaveDataApp(app: Application): void {
    this.Execute({
      Arguments: {
        App: app
      },
      Type: 'SaveDataApp'
    });
  }

  /**
   * Toggle between adding and canceling a new app
   */
  public ToggleAddNew(): void {
    this.Execute({
      Arguments: {
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
