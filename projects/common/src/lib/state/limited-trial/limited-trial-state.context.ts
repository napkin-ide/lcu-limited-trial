import { StateContext, Application } from '@lcu/common';
import { Injectable, Injector } from '@angular/core';
import { LimitedTrialState } from './limited.state';

@Injectable({
  providedIn: 'root'
})
export class LimitedTrialStateContext extends StateContext<LimitedTrialState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  public SetUserType() {
    this.Execute({
      Arguments: {
      },
      Type: 'SetUserType'
    });
  }

  public SetActiveApp(app: Application) {
    this.Execute({
      Arguments: {
        App: app
      },
      Type: 'setActiveApp'
    });
  }

  //  Helpers
  protected defaultValue() {
    const defaultValues: LimitedTrialState = new LimitedTrialState();
    defaultValues.Loading = true;

    return defaultValues;
  }

  // protected loadStateKey(): string {
  //   return 'init';
  // }

  // protected loadStateName(): string {
  //   return 'limitedtrial';
  // }
  protected loadStateKey(): string {
    return 'main';
  }

  protected loadStateName(): string {
   return 'applicationmanagement';
  }
}
