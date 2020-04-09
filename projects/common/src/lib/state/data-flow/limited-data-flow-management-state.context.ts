import { StateContext, DataFlow } from '@lcu/common';
import { Injectable, Injector } from '@angular/core';
import { LimitedDataFlowManagementState } from './limited-data-flow-management.state';

@Injectable({
  providedIn: 'root'
})
export class LimitedDataFlowManagementStateContext extends StateContext<
  LimitedDataFlowManagementState
> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  public DeleteDataFlow(dataFlowLookup: string) {
    this.Execute({
      Arguments: {
        DataFlowLookup: dataFlowLookup
      },
      Type: 'DeleteDataFlow'
    });
  }

  public DeployDataFlow(dataFlowLookup: string) {
    this.Execute({
      Arguments: {
        DataFlowLookup: dataFlowLookup
      },
      Type: 'DeployDataFlow'
    });
  }

  public SaveDataFlow(dataFlow: DataFlow) {
    this.Execute({
      Arguments: {
        DataFlow: dataFlow
      },
      Type: 'SaveDataFlow'
    });
  }

  public SetActiveDataFlow(dataFlowLookup: string) {
    this.Execute({
      Arguments: {
        DataFlowLookup: dataFlowLookup
      },
      Type: 'SetActiveDataFlow'
    });
  }

  public ToggleCreationModules() {
    this.Execute({
      Arguments: {},
      Type: 'ToggleCreationModules'
    });
  }

  public ToggleIsCreating() {
    this.Execute({
      Arguments: {},
      Type: 'ToggleIsCreating'
    });
  }

  //  Helpers
  protected defaultValue() {
    return { Loading: true } as LimitedDataFlowManagementState;
  }

  protected loadStateKey(): string {
    return 'data-flow';
    // return 'main';
  }

  protected loadStateName(): string {
    return 'limitedtrial';
    // return 'dataflowmanagement';
  }
}
