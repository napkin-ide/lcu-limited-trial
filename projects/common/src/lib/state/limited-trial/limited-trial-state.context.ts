import { StateContext } from '@lcu/common';
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

  //  Helpers
  protected defaultValue() {
    return { Loading: true } as LimitedTrialState;
  }

  protected loadStateKey(): string {
    return 'init';
  }

  protected loadStateName(): string {
    return 'limitedtrial';
  }
}
