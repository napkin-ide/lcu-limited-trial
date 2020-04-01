import { StateContext } from '@lcu/common';
import { Injectable, Injector } from '@angular/core';
import { LimitedDataFlowManagementState } from './limited-data-flow-management.state';

@Injectable({
  providedIn: 'root'
})
export class LimitedDataFlowManagementStateContext extends StateContext<LimitedDataFlowManagementState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  // public ___() {
  //   this.Execute({
  //     Arguments: {
  //     },
  //     Type: 'SetUserType'
  //   });
  // }

  //  Helpers
  protected defaultValue() {
    return { Loading: true } as LimitedDataFlowManagementState;
  }

  protected loadStateKey(): string {
    return 'data-flow';
  }

  protected loadStateName(): string {
    return 'limitedtrial';
  }
}
