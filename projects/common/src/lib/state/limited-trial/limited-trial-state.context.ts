import { StateContext, Application } from '@lcu/common';
import { Injectable, Injector } from '@angular/core';
import { LimitedTrialState } from './limited.state';

@Injectable({
  providedIn: 'root'
})
export class LimitedTrialStateContext extends StateContext<LimitedTrialState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  public SetUserType() {
    this.Execute({
      Arguments: {
      },
      Type: 'SetUserType'
    });
  }

  public SetActiveApp(app: Application) {
    debugger;
    this.Execute({
      Arguments: {
        App: app
      },
      Type: 'setActiveApp'
    });
  }

  //  Helpers
  protected defaultValue() {
    // const defaults: LimitedTrialState = new LimitedTrialState();
    // defaults.Applications = this.applications();
    // defaults.Loading = true;
    // defaults.AddingApp = false;

    // return defaults;
    return {
              Loading: true
           } as LimitedTrialState;
  }

  // protected loadStateKey(): string {
  //   return 'init';
  // }

  // protected loadStateName(): string {
  //   return 'limitedtrial';
  // }
  protected loadStateKey() {
    return 'main';
  }

  protected loadStateName() {
   return 'applicationmanagement';
   // return 'data-apps-config-manager';
  }

  protected activeApp(): object {
    return {
          Container: 'lcu-data-apps',
          EnterpriseAPIKey: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7',
          Hosts: ['www.fathym-int.com', 'www.fathym-it.com'],
          IsPrivate: false,
          IsReadOnly: false,
          Name: 'lcu-data-apps',
          PathRegex: '/_lcu/lcu-data-apps*',
          Priority: 21000,
          QueryRegex: '',
          UserAgentRegex: '',
          Created: null,
          ID: '044cae8b-0091-4db3-9f4a-1768b8001d64',
          Modified: null,
          Registry: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7',
    };
  }

  protected activeDAFApp(): object {
    return {
            ApplicationID: '044cae8b-0091-4db3-9f4a-1768b8001d64',
            Priority: 10000,
            Created: null,
            ID: '92f0a684-b91a-4b37-8eac-ee34f5c4fc74',
            Modified: null,
            Lookup: null,
            Registry: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7|044cae8b-0091-4db3-9f4a-1768b8001d64',
            EnterpriseAPIKey: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7',
            BaseHref: '/_lcu/lcu-data-apps/',
            NPMPackage: '@napkin-ide/lcu-data-apps-lcu',
            PackageVersion: '0.3.2-integration',
    };
  }

  protected applications(): Array<Application> {
    return [
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'State API - Data Flow Management',
        'PathRegex': '/api/state/dataflowmanagement*',
        'Priority': 35500,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '0d1aba4d-c055-4536-acb9-b2f0698d15dc',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'State API - IDE Management',
        'PathRegex': '/api/state/idemanagement*',
        'Priority': 35000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '673066be-5c6f-4f09-8217-fdd909c7b2a5',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'State API - Limited Trial',
        'PathRegex': '/api/state/limitedtrial*',
        'Priority': 33500,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '991477bb-ccee-426d-a0c1-303642f8e4a3',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'State API - Application Management',
        'PathRegex': '/api/state/applicationmanagement*',
        'Priority': 33000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': 'bffb3e53-c708-4d4e-af4d-b1f1df8162e5',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'State API - Reporting Management',
        'PathRegex': '/api/state/reportingmanagement*',
        'Priority': 32500,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': 'e456fc54-7962-4221-a54b-5af37f254de5',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'State API - User Management',
        'PathRegex': '/api/state/usermanagement*',
        'Priority': 32000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '760beec8-68ea-4e50-99ed-d3cc397a3021',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'Hello World',
        'PathRegex': '/hello*',
        'Priority': 30500,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '490fcaf0-f7e7-447a-b2ee-2dc180123f6d',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'Dashboard Admin',
        'PathRegex': '/dashboard*',
        'Priority': 27000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '88956e3c-303d-4c82-9f08-f91e0cd4a5c8',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'Data Flow Demo',
        'PathRegex': '/data-flow*',
        'Priority': 26500,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '9b87a3f0-67cd-4337-b732-8d4105ac1013',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'Dashboard Admin',
        'PathRegex': '/dashboard*',
        'Priority': 26000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '191a1c6d-4acf-4a65-b1c9-693f62ce6622',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': true,
        'IsReadOnly': false,
        'Name': 'Private App',
        'PathRegex': '/private*',
        'Priority': 25500,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '2886a1d4-c130-451a-830e-2470f931e090',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'Hello World',
        'PathRegex': '/hello*',
        'Priority': 24500,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '749b556a-96d2-431f-bc96-d573c162b0f9',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'Forecast',
        'PathRegex': '/forecast*',
        'Priority': 24000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '10df02ad-780e-49aa-ab1d-02bb7cea469e',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'lcu-data-flow-iot-provisioning',
        'PathRegex': '/_lcu/lcu-data-flow-iot-provisioning*',
        'Priority': 23500,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '7f70e969-e8c0-476a-8987-67a53561503d',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'iot-provisioning',
        'PathRegex': '/_lcu/iot-provisioning*',
        'Priority': 23000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '381fe159-2e78-4ce8-8b22-fbe6ae0a9008',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'lcu-data-flow',
        'PathRegex': '/_lcu/lcu-data-flow*',
        'Priority': 22500,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '14ef4ee5-db67-4dea-be68-c01171bec7b8',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'lcu-state',
        'PathRegex': '/_lcu/lcu-state*',
        'Priority': 22000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': 'a94b2f55-e446-487c-a592-184b7676e52e',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'lcu-apps',
        'PathRegex': '/_lcu/lcu-apps*',
        'Priority': 21500,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '7915e850-7c3b-47d5-a178-662d46bfa8cb',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'lcu-data-apps',
        'PathRegex': '/_lcu/lcu-data-apps*',
        'Priority': 21000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '044cae8b-0091-4db3-9f4a-1768b8001d64',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-int.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': true,
        'IsReadOnly': false,
        'Name': 'Organization Setup',
        'PathRegex': '/setup*',
        'Priority': 20000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '8fc0f080-bd17-4f9f-b7a2-832fa6c58c3f',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'int.lowcodeunit.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'Forge Infrastructure Application',
        'PathRegex': '/forge-infra*',
        'Priority': 20000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '86e9748d-7e67-4bd0-80b5-766e4c989f80',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'int.lowcodeunit.com',
          'www.fathym-int.com',
          'int.lowcodeunit.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'Enterprise IDE Settings',
        'PathRegex': '/forge-settings*',
        'Priority': 20000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': 'e47c031e-de95-4407-b9ad-6f4b06528d4f',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'int.lowcodeunit.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': true,
        'IsReadOnly': false,
        'Name': 'Org Reg',
        'PathRegex': '/org-reg*',
        'Priority': 10000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': 'aed4db46-09b6-407a-91d0-33a42945f425',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'int.lowcodeunit.com',
          'www.fathym-int.com',
          'int.lowcodeunit.com',
          'www.fathym-int.com',
          'int.lowcodeunit.com',
          'www.fathym-int.com',
          'int.lowcodeunit.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': true,
        'IsReadOnly': false,
        'Name': 'Napkin IDE',
        'PathRegex': '/fathym-it*',
        'Priority': 10000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '8a0a4c11-1358-45e8-b3bf-2f50d7eb8989',
        
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-int.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'Setup New Project',
        'PathRegex': '/projects/new*',
        'Priority': 5000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': 'b434455c-9bdc-451d-bc4f-20e3b465ac8f',
        
        
      },
      {
        'Container': 'lcu-data-apps',
        
        'Hosts': [
          'www.fathym-int.com',
          'www.fathym-it.com'
        ],
        'IsPrivate': false,
        'IsReadOnly': false,
        'Name': 'Forge Public Application',
        'PathRegex': '/*',
        'Priority': 5000,
        'QueryRegex': '',
        'UserAgentRegex': '',
        
        'ID': '952b95f2-f1d2-45ed-8d12-3c62399f54ad',
        
        
        
      }
    ];
  }
}
