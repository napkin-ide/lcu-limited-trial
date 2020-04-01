import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LimitedDataFlowManagementStateContext } from './../../state/data-flow/limited-data-flow-management-state.context';
import { LimitedDataFlowManagementState } from '../../state/data-flow/limited-data-flow-management.state';

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

  //  Properties
  public PublicDataSource: Array<any>;
  public State: LimitedDataFlowManagementState;

  //  Constructors
  constructor(protected injector: Injector,
              protected dfMgmt: LimitedDataFlowManagementStateContext) {
    super(injector);

    this.PublicDataSource = [
      {
        Name: 'Test Data Flow',
        Description: 'This is a description of the data flow.',
        MaterialIcon: 'account_tree'
      },
      {
        Name: 'Emulated Data Flow of a Data IoT Flow',
        Description:
          `This is a description of the data flow.
          This description is particularily long, to show how it would wrap in a container.`,
        MaterialIcon: 'account_tree'
      },
      {
        Name: 'Another Data Flow',
        Description: 'This is a description of the data flow.',
        MaterialIcon: 'account_tree'
      }
    ];
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
    /**
     * Listen for state changes
     */
    this.dfMgmt.Context.subscribe((state: any) => {
      this.State = state;
      console.log('Successfully loaded State: ', this.State);

      this.handleStateChanges();
    });
  }

  //  API Methods

  /**
   * Click handler for the selected application
   *
   * @param app selected application
   */
  public SetActiveApp(app: any): void {
    this.State.Loading = true;

    // this.state.SetActiveApp(app);
  }

  //  Helpers
  protected handleStateChanges(): void {
    console.log('this.State', this.State);
  }
}
