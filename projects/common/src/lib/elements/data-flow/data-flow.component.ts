import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

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

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
