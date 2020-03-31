import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent, Application } from '@lcu/common';
import { LimitedTrialStateContext } from '../../state/limited-trial/limited-trial-state.context';
import { LimitedTrialState } from '../../state/limited-trial/limited.state';

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
  public State: LimitedTrialState;

  //  Constructors
  constructor(
    protected injector: Injector,
    protected state: LimitedTrialStateContext
  ) {
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
    this.state.Context.subscribe((state: any) => {
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
  public SetActiveApp(app: Application): void {
    this.State.Loading = true;

    // this.state.SetActiveApp(app);
  }

  //  Helpers
  protected handleStateChanges(): void {
    console.log('this.state', this.state);
    console.log('this.State', this.State);
  }
}
