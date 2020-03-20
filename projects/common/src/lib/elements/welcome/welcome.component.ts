import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuLimitedTrialWelcomeElementState {}

export class LcuLimitedTrialWelcomeContext extends LCUElementContext<LcuLimitedTrialWelcomeElementState> {}

export const SELECTOR_LCU_LIMITED_TRIAL_WELCOME_ELEMENT = 'lcu-limited-trial-welcome-element';

@Component({
  selector: SELECTOR_LCU_LIMITED_TRIAL_WELCOME_ELEMENT,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class LcuLimitedTrialWelcomeElementComponent extends LcuElementComponent<LcuLimitedTrialWelcomeContext> implements OnInit {
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
