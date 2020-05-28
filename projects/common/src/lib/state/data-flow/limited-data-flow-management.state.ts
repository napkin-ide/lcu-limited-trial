import { DataFlow, DataFlowModuleDisplay, DataFlowModulePack, DataFlowModuleOption } from '@lcu/common';

export class LimitedDataFlowManagementState {
  public ActiveDataFlow?: DataFlow;

  public AllowCreationModules?: boolean;

  public DataFlows?: DataFlow[];

  public EmulatedDataFlows?: DataFlow[];

  public EnvironmentLookup?: boolean;

  public IsCreating?: boolean;

  public Loading?: boolean;

  public ModuleDisplays?: DataFlowModuleDisplay[];

  public ModulePacks?: DataFlowModulePack[];

  public ModuleOptions?: DataFlowModuleOption[];
}
