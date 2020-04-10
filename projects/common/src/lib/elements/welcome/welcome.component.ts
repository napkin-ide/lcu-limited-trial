import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
  public DividedJourneys: Array<{ JourneyName: string, Journeys: Array<any> }>;
  public Journeys: Array<any>;
  public PanelOpenState: boolean;

  public get UserRoles() { return Object.keys(UserRole); }

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
    this.PanelOpenState = false;
    this.DividedJourneys = [];
    this.Journeys = this.getJourneys();
    this.divideJourneys();
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
  protected divideJourneys() {
    this.UserRoles.forEach(role => {
      this.DividedJourneys.push({ JourneyName: role, Journeys: [] });
    });
    this.Journeys.forEach(journey => {
      journey.Roles.forEach((role: any) => {
        this.DividedJourneys.find(j => j.JourneyName === role).Journeys.push(journey);
      });
    });
  }
  protected getJourneys(): Array<any> {
    return [
      {
        Name: 'IOT - To the Edge and Beyond!',
        VideoUrl: 'https://player.vimeo.com/video/403508452',
        Uses: ['Devices', 'Data Flow', 'Data Science'],
        Description: 'Build and connect edge devices, securely manage, visualize and analyze your data, and take action on your intelligence.',
        Roles: [UserRole.Developer],
        Active: true
      },
      {
        Name: 'Application Development',
        VideoUrl: 'https://player.vimeo.com/video/403508452',
        Uses: ['JS Apps', 'Security', 'Dev Tools'],
        Description: 'Develop JavaScript applications in the framework of your choosing and easily deploy, secure, and manage at scale.',
        Roles: [UserRole.Developer],
        Active: false
      },
      {
        Name: 'Cloud Development',
        VideoUrl: 'https://player.vimeo.com/video/403508452',
        Uses: ['DevOps', 'IaC', 'Data Flow'],
        Description: 'Rapidly set up and manage enterprise grade, best practice cloud infrastructures and leverage them to build apps and APIs.',
        Roles: [UserRole.Developer],
        Active: false
      },
      {
        Name: 'Data Development',
        VideoUrl: 'https://player.vimeo.com/video/403508452',
        Uses: ['AI/ML', 'Analytics', 'Reporting'],
        Description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        Roles: [UserRole.Developer],
        Active: false
      },
      {
        Name: 'Cloud Orchestration',
        VideoUrl: 'https://player.vimeo.com/video/403508452',
        Uses: ['DevOps', 'IaC', 'Data Flow'],
        Description: 'Rapidly set up and manage enterprise grade, best practice cloud infrastructures and leverage them to build apps and APIs.',
        Roles: [UserRole.Developer],
        Active: false
      },
      {
        Name: 'Enterprise Intranets',
        VideoUrl: 'https://player.vimeo.com/video/403508452',
        Uses: ['Dashboards', 'Reporting', 'Identity'],
        Description: 'Leverage our Enterprise IDE to rapidly pull together open source and custom LCUs to drive value in your organization.',
        Roles: [UserRole.Developer],
        Active: false
      },
      {
        Name: 'Designer Tools',
        VideoUrl: 'https://player.vimeo.com/video/403508452',
        Uses: ['AI/ML', 'Analytics', 'Reporting'],
        Description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        Roles: [UserRole.Designer],
        Active: false
      },
      {
        Name: 'Admin Tools',
        VideoUrl: 'https://player.vimeo.com/video/403508452',
        Uses: ['AI/ML', 'Analytics', 'Reporting'],
        Description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        Roles: [UserRole.Administrator],
        Active: false
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