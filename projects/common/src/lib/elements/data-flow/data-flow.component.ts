import { DataFlowManagerEventService } from '@napkin-ide/lcu-data-flow-common';

import { Component, OnInit, Injector } from '@angular/core';
import { LimitedDataFlowManagementStateContext } from './../../state/data-flow/limited-data-flow-management-state.context';
import { LimitedDataFlowManagementState } from '../../state/data-flow/limited-data-flow-management.state';
import { LCUElementContext, LcuElementComponent, DataFlow } from '@lcu/common';

import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProvisioningModalComponent } from './modals/provisioning-modal/provisioning-modal.component';

export class LcuLimitedTrialDataFlowElementState {}

export class LcuLimitedTrialDataFlowContext extends LCUElementContext<LcuLimitedTrialDataFlowElementState> {}

export const SELECTOR_LCU_LIMITED_TRIAL_DATA_FLOW_ELEMENT = 'lcu-limited-trial-data-flow-element';

@Component({
  selector: SELECTOR_LCU_LIMITED_TRIAL_DATA_FLOW_ELEMENT,
  templateUrl: './data-flow.component.html',
  styleUrls: ['./data-flow.component.scss']
})
export class LcuLimitedTrialDataFlowElementComponent extends LcuElementComponent<LcuLimitedTrialDataFlowContext> implements OnInit {
  //  Fields
  protected subscriptions: { [key: string]: Subscription };

  //  Properties
  public AllowDelete: boolean = false;

  public DataFlowLists: { emulatedDataFlows: DataFlow[], trialDataFlows: DataFlow[] };

  public State: LimitedDataFlowManagementState;

  //  Constructors
  constructor(
    protected dialog: MatDialog,
    protected injector: Injector,
    protected dataFlowEventService: DataFlowManagerEventService,
    protected dfMgmt: LimitedDataFlowManagementStateContext
  ) {
    super(injector);

    this.DataFlowLists = { emulatedDataFlows: [], trialDataFlows: [] };

    this.subscriptions = {
      deleteDataFlow: this.deleteDataFlow(),
      deployDataFlow: this.deployDataFlow(),
      saveDataFlow: this.saveDataFlow(),
      setActiveDataFlow: this.setActiveDataFlow(),
      toggleCreationModules: this.toggleCreationModules(),
      toggleIsCreating: this.toggleIsCreating()
    };
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    this.dfMgmt.Context.subscribe(async (state: any) => {
      this.State = state;
      console.log('DataFlow State: ', this.State);

      await this.handleStateChanges();
    });
  }

  //  API Methods
  public ToggleIsCreating(): void {
    this.State.Loading = true;

    this.dfMgmt.ToggleIsCreating();
  }

  //  Helpers
  protected handleStateChanges(): void {
    if (JSON.stringify(this.State.EmulatedDataFlows) !== JSON.stringify(this.DataFlowLists.emulatedDataFlows)) {
      this.DataFlowLists.emulatedDataFlows = this.State.EmulatedDataFlows ? this.State.EmulatedDataFlows : [];
    }
    if (JSON.stringify(this.State.DataFlows) !== JSON.stringify(this.DataFlowLists.trialDataFlows)) {
      this.DataFlowLists.trialDataFlows = this.State.DataFlows ? this.State.DataFlows : [];
    }
  }

  protected openProvisioningDialog(): void {
    this.dialog.open(ProvisioningModalComponent, {
      width: '610px',
      data: null
    });
  }

  protected deleteDataFlow(): Subscription {
    return this.dataFlowEventService.GetDeleteDataFlowEvent().subscribe(
      (dataFlowLookup: string) => {
        this.State.Loading = true;
        this.dfMgmt.DeleteDataFlow(dataFlowLookup);
      }
    );
  }

  protected deployDataFlow(): Subscription {
    return this.dataFlowEventService.GetDeployDataFlowEvent().subscribe(
      () => {
        this.openProvisioningDialog();
      }
    );
  }

  protected saveDataFlow(): Subscription {
    return this.dataFlowEventService.GetSaveDataFlowEvent().subscribe(
      (dataFlow: DataFlow) => {
        this.State.Loading = true;
        this.dfMgmt.SaveDataFlow(dataFlow);
      }
    );
  }

  protected setActiveDataFlow(): Subscription {
    return this.dataFlowEventService.GetSetActiveDataFlowEvent().subscribe(
      (dataFlow: DataFlow) => {
        this.State.Loading = true;

        if (this.State.IsCreating) {
          this.ToggleIsCreating();
        }

        this.dfMgmt.SetActiveDataFlow(dataFlow);
      }
    );
  }

  protected toggleCreationModules(): Subscription {
    return this.dataFlowEventService.GetToggleCreationModulesEvent().subscribe(
      () => {
        this.State.Loading = true;
        this.dfMgmt.ToggleCreationModules();
      }
    );
  }

  protected toggleIsCreating(): Subscription {
    return this.dataFlowEventService.GetToggleIsCreatingEvent().subscribe(
      () => {
        this.ToggleIsCreating();
      }
    );
  }
}
