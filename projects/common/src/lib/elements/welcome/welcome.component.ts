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

  /**
   * Array of journeys divided up into role types (used to populate UI)
   */
  public DividedJourneys: Array<{ JourneyName: string, Journeys: Array<any> }> = [];

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
   * Divides the journeys from the state into individual arrays of role-based journeys
   */
  protected divideJourneys() {
    this.DividedJourneys = [];
    this.JourneyRoles.forEach(role => {
      this.DividedJourneys.push({ JourneyName: role, Journeys: [] });
    });
    this.State.Journeys.forEach(journey => {
      journey.Roles.forEach((role: any) => {
        this.DividedJourneys.find(j => j.JourneyName === role).Journeys.push(journey);
      });
    });
  }

  /**
   * Handle when the state is returned
   */
  protected handleStateChanges(): void {
    if (this.State.Journeys) {
      this.divideJourneys();
    }
  }
}

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
