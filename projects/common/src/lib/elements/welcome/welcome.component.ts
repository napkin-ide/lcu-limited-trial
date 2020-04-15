import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  JourneyRoleTypes,
  LimitedJourneysManagementState,
  JourneyOption,
  JourneyContentTypes,
} from '../../state/journeys/journeys.state';
import { LimitedJourneysManagementStateContext } from '../../state/journeys/journeys-state.context';

export class LcuLimitedTrialWelcomeElementState {}

export class LcuLimitedTrialWelcomeContext extends LCUElementContext<
  LcuLimitedTrialWelcomeElementState
> {}

export const SELECTOR_LCU_LIMITED_TRIAL_WELCOME_ELEMENT =
  'lcu-limited-trial-welcome-element';

@Component({
  selector: SELECTOR_LCU_LIMITED_TRIAL_WELCOME_ELEMENT,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class LcuLimitedTrialWelcomeElementComponent
  extends LcuElementComponent<LcuLimitedTrialWelcomeContext>
  implements OnInit {
  //  Fields

  //  Properties
  /**
   * Content Types
   */
  public ContentTypes = JourneyContentTypes;

  public PanelOpenState: boolean;

  /**
   * Current state
   */
  public State: LimitedJourneysManagementState;

  public get JourneyRoles() {
    return Object.keys(JourneyRoleTypes);
  }

  //  Constructors
  constructor(
    protected injector: Injector,
    protected state: LimitedJourneysManagementStateContext
  ) {
    super(injector);
    this.PanelOpenState = false;
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    this.state.Context.subscribe((state: any) => {
      this.State = state;

      this.handleStateChanges();
    });
  }

  //  API Methods
  public ContainsRoleType(journey: JourneyOption, roleType: JourneyRoleTypes) {
    return !!journey.Roles.find((r) => r === roleType);
  }

  //  Helpers

  /**
   * Handle when the state is returned
   */
  protected handleStateChanges(): void {}
}
