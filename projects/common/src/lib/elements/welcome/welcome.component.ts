import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JourneyRoleTypes } from '../../state/journeys/journeys.state';

export class LcuLimitedTrialWelcomeElementState { }

export class LcuLimitedTrialWelcomeContext extends LCUElementContext<LcuLimitedTrialWelcomeElementState> { }

export const SELECTOR_LCU_LIMITED_TRIAL_WELCOME_ELEMENT = 'lcu-limited-trial-welcome-element';

@Component({
  selector: SELECTOR_LCU_LIMITED_TRIAL_WELCOME_ELEMENT,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class LcuLimitedTrialWelcomeElementComponent extends LcuElementComponent<LcuLimitedTrialWelcomeContext> implements OnInit {
  //  Fields

  //  Properties
  public PanelOpenState: boolean;

  public get UserRoles() { return Object.keys(JourneyRoleTypes); }

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
    this.PanelOpenState = false;
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
