import { Application, DAFApplicationConfig, DAFAPIApplicationConfig, Status, DAFViewApplicationConfig } from '@lcu/common';

export class LimitedDataAppsManagementState {
  public ActiveApp: Application;

  public ActiveDAFApp: DAFApplicationConfig;

  public ActiveDAFAPIs: DAFAPIApplicationConfig[];

  public ActiveHost: string;

  // I'm adding this property
  public CurrentAppView: DAFViewApplicationConfig;

  public AddingApp: boolean;

  public Applications: Application[];

  public AppType: DAFAppTypes;

  public DAFApps: DAFApplicationConfig[];

  public DefaultApps: Application[];

  public DefaultAppsEnabled: Status;

  public HostOptions: string[];

  public Loading?: boolean;

  // public VersionLookups?: boolean;
  public VersionLookups?: any;
}

export enum DAFAppTypes {
  View = 'View',
  API = 'API',
  Redirect = 'Redirect'
}
