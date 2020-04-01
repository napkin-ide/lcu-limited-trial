import { Component, OnInit, Injector } from '@angular/core';
import {
  LCUElementContext,
  LcuElementComponent,
  Application
} from '@lcu/common';
import { LimitedDataAppsManagementStateContext } from '../../state/data-apps/limited-data-apps-management-state.context';
import { LimitedDataAppsManagementState } from '../../state/data-apps/limited-data-apps-management.state';

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
  public PublicDataSource: Array<Application>;

  public PrivateDataSource: Array<Application>;

  public State: LimitedDataAppsManagementState;

  //  Constructors
  constructor(
    protected injector: Injector,
    protected dfMgmt: LimitedDataAppsManagementStateContext
  ) {
    super(injector);

    this.PrivateDataSource = [];
    this.PublicDataSource = [];
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    /**
     * Listen for state changes
     */
    this.dfMgmt.Context.subscribe((state: any) => {
      this.State = state;

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

    this.dfMgmt.SetActiveApp(app);
  }

  //  Helpers

  /**
   * Handle when the state is returned
   */
  protected handleStateChanges(): void {
    debugger;
    if (this.State.Applications) {
      this.separateAppTypes();
    }
  }

  /**
   * separate data into public or private apps
   */
  protected separateAppTypes(): void {
    this.PublicDataSource = this.State.Applications.filter(
      (itm: Application) => {
        return itm.IsPrivate === false;
      }
    );

    this.PrivateDataSource = this.State.Applications.filter(
      (itm: Application) => {
        return itm.IsPrivate === true;
      }
    );
  }
}
