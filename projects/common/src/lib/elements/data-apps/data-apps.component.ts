import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { LimitedDataAppsManagementStateContext } from '../../state/data-apps/limited-data-apps-management-state.context';

export class LcuLimitedTrialDataAppsElementState {}

export class LcuLimitedTrialDataAppsContext extends LCUElementContext<
  LcuLimitedTrialDataAppsElementState
> {}

export const SELECTOR_LCU_LIMITED_TRIAL_DATA_APPS_ELEMENT =
  'lcu-limited-trial-data-apps-element';

@Component({
  selector: SELECTOR_LCU_LIMITED_TRIAL_DATA_APPS_ELEMENT,
  templateUrl: './data-apps.component.html',
  styleUrls: ['./data-apps.component.scss']
})
export class LcuLimitedTrialDataAppsElementComponent
  extends LcuElementComponent<LcuLimitedTrialDataAppsContext>
  implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(
    protected injector: Injector,
    protected dfMgmt: LimitedDataAppsManagementStateContext
  ) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
