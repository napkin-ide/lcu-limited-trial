import { Application, DAFApplicationConfig, DAFAPIApplicationConfig, Status } from '@lcu/common';

export class LimitedDataAppsManagementState {
  public ActiveApp: Application;

  public ActiveDAFApp: DAFApplicationConfig;

  public ActiveDAFAPIs: DAFAPIApplicationConfig[];

  public ActiveHost: string;

  public AddingApp: boolean;

  public Applications: Application[];

  public AppType: DAFAppTypes;

  public DAFApps: DAFApplicationConfig[];

  public DefaultApps: Application[];

  public DefaultAppsEnabled: Status;

  public HostOptions: string[];

  public Loading?: boolean;

  public VersionLookups?: boolean;
}

export enum DAFAppTypes {
  View = 'View',
  API = 'API',
  Redirect = 'Redirect'
}
