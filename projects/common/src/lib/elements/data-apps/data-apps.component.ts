// import { DataAppService } from '../../services/data-apps/data-apps.service';
import { Component, OnInit, Injector } from '@angular/core';
import {
  LCUElementContext,
  LcuElementComponent,
  Application
} from '@lcu/common';
import { LimitedDataAppsManagementStateContext } from '../../state/data-apps/limited-data-apps-management-state.context';
import { LimitedDataAppsManagementState } from '../../state/data-apps/limited-data-apps-management.state';
import { ListItemModel } from '../../models/list-item.model';

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
  extends LcuElementComponent<LcuLimitedTrialDataAppsContext> implements OnInit {
  //  Fields

  //  Properties

  // public ListItemData: Array<ListItemModel>;

  /**
   * Public data applications
   */
  public PublicDataSource: Array<Application>;

  /**
   * Private data applications
   */
  public PrivateDataSource: Array<Application>;

  /**
   * Current state
   */
  public State: LimitedDataAppsManagementState;

  //  Constructors
  constructor(
    protected injector: Injector,
    protected state: LimitedDataAppsManagementStateContext
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
    this.state.Context.subscribe((state: any) => {
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

    /**
     * Keep a copy of the previous ActiveApp
     * This should be handled in the State,
     * but doing it here for now - Shannon
     */

    if (app !== null) {
      // this.dataAppService.PreviousActiveApp = app;
    }

    this.state.SetActiveApp(app);
  }

  /**
   * Toggle between adding and canceling a new app
   * 
   * @param addNew boolean for adding or canceling the creatinon of a new app
   */
  public ToggleAddingApp(addNew: boolean): void {
    this.State.Loading = true;

    // toggle
    this.state.ToggleAddNew(addNew);

    /**
     * when cancelling creating a new app, setActiveApp
     * to the previous ActiveApp
     */

    if (!addNew) {
     // this.state.SetActiveApp(this.dataAppService.PreviousActiveApp);
    }
  }

  //  Helpers

  /**
   * Handle when the state is returned
   */
  protected handleStateChanges(): void {
    if (this.State.Applications) {
      this.separateAppTypes();
    }
  }

  /**
   * Separate data into public or private apps
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
