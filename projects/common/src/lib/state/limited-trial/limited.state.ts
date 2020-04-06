import { Application, DAFViewApplicationConfig } from '@lcu/common';

/**
 * Model class for state data
 */
export class LimitedTrialState {
  public ActiveApp: Application;

  public ActiveDAFAPIs: Array<object>;

  public ActiveView: DAFViewApplicationConfig;

  public AddingApp: boolean;

  public Applications: Application[];

  public AppType: string;

  public DefaultApps: Array<Application>;

  public Loading?: boolean;
}