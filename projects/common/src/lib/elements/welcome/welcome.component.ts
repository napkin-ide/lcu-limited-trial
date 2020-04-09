import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuLimitedTrialWelcomeElementState { }

export class LcuLimitedTrialWelcomeContext extends LCUElementContext<LcuLimitedTrialWelcomeElementState> { }

export const SELECTOR_LCU_LIMITED_TRIAL_WELCOME_ELEMENT = 'lcu-limited-trial-welcome-element';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: SELECTOR_LCU_LIMITED_TRIAL_WELCOME_ELEMENT,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class LcuLimitedTrialWelcomeElementComponent extends LcuElementComponent<LcuLimitedTrialWelcomeContext> implements OnInit {
  //  Fields

  //  Properties
  public PanelOpenState = false;
  public Journeys: Array<any>;

  public get UserRoles() { return Object.keys(UserRole); }

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
    this.Journeys = this.getJourneys();
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
  protected getJourneys(): Array<any> {
    return [
      {
        name: 'IOT - To the Edge and Beyond!',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['Devices', 'Data Flow', 'Data Science'],
        description: 'Build and connect edge devices, securely manage, visualize and analyze your data, and take action on your intelligence.',
        roles: [UserRole.Developer]
      },
      {
        name: 'Cloud Orchestration',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['AI/ML', 'Analytics', 'Reporting'],
        description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        roles: [UserRole.Developer]
      },
      {
        name: 'Cloud Orchestration',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['AI/ML', 'Analytics', 'Reporting'],
        description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        roles: [UserRole.Developer]
      },
      {
        name: 'Cloud Orchestration',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['AI/ML', 'Analytics', 'Reporting'],
        description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        roles: [UserRole.Developer]
      },
      {
        name: 'Cloud Orchestration',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['AI/ML', 'Analytics', 'Reporting'],
        description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        roles: [UserRole.Developer]
      },
      {
        name: 'Cloud Orchestration',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['AI/ML', 'Analytics', 'Reporting'],
        description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        roles: [UserRole.Developer]
      },
      {
        name: 'Enterprise Intranets',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['AI/ML', 'Analytics', 'Reporting'],
        description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        roles: [UserRole.Designer]
      },
      {
        name: 'Data Development',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['AI/ML', 'Analytics', 'Reporting'],
        description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        roles: [UserRole.Administrator]
      }
    ];
  }
}

export enum UserRole {
  Developer = 'Developer',
  Designer = 'Designer',
  Administrator = 'Administrator'
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