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
  public DividedJourneys: Array<{ journeyName: string, journeys: Array<any> }>;
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
      this.DividedJourneys.push({ journeyName: role, journeys: [] });
    });
    this.Journeys.forEach(journey => {
      journey.roles.forEach((role: any) => {
        this.DividedJourneys.find(j => j.journeyName === role).journeys.push(journey);
      });
    });
  }
  protected getJourneys(): Array<any> {
    return [
      {
        name: 'IOT - To the Edge and Beyond!',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['Devices', 'Data Flow', 'Data Science'],
        description: 'Build and connect edge devices, securely manage, visualize and analyze your data, and take action on your intelligence.',
        roles: [UserRole.Developer],
        active: true
      },
      {
        name: 'Application Development',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['JS Apps', 'Security', 'Dev Tools'],
        description: 'Develop JavaScript applications in the framework of your choosing and easily deploy, secure, and manage at scale.',
        roles: [UserRole.Developer],
        active: false
      },
      {
        name: 'Cloud Development',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['DevOps', 'IaC', 'Data Flow'],
        description: 'Rapidly set up and manage enterprise grade, best practice cloud infrastructures and leverage them to build apps and APIs.',
        roles: [UserRole.Developer],
        active: false
      },
      {
        name: 'Data Development',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['AI/ML', 'Analytics', 'Reporting'],
        description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        roles: [UserRole.Developer],
        active: false
      },
      {
        name: 'Cloud Orchestration',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['DevOps', 'IaC', 'Data Flow'],
        description: 'Rapidly set up and manage enterprise grade, best practice cloud infrastructures and leverage them to build apps and APIs.',
        roles: [UserRole.Developer],
        active: false
      },
      {
        name: 'Enterprise Intranets',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['Dashboards', 'Reporting', 'Identity'],
        description: 'Leverage our Enterprise IDE to rapidly pull together open source and custom LCUs to drive value in your organization.',
        roles: [UserRole.Developer],
        active: false
      },
      {
        name: 'Designer Tools',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['AI/ML', 'Analytics', 'Reporting'],
        description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        roles: [UserRole.Designer],
        active: false
      },
      {
        name: 'Admin Tools',
        videoUrl: 'https://player.vimeo.com/video/403508452',
        uses: ['AI/ML', 'Analytics', 'Reporting'],
        description: 'Develop data applications from existing and new enterprise data. Leverage existing tools with new at a rapid pace.',
        roles: [UserRole.Administrator],
        active: false
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