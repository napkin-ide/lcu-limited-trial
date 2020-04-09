import { Component, OnInit, Injector } from '@angular/core';
import { LimitedDataFlowManagementStateContext } from './../../state/data-flow/limited-data-flow-management-state.context';
import { LimitedDataFlowManagementState } from '../../state/data-flow/limited-data-flow-management.state';
import { LCUElementContext, LcuElementComponent, DataFlow } from '@lcu/common';
import { DataFlowManagerEventService } from '@napkin-ide/lcu-data-flow-common';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProvisioningModalComponent } from './modals/provisioning-modal/provisioning-modal.component';

export class LcuLimitedTrialDataFlowElementState {}

export class LcuLimitedTrialDataFlowContext extends LCUElementContext<LcuLimitedTrialDataFlowElementState> {}

export const SELECTOR_LCU_LIMITED_TRIAL_DATA_FLOW_ELEMENT = 'lcu-limited-trial-data-flow-element';

@Component({
  selector: SELECTOR_LCU_LIMITED_TRIAL_DATA_FLOW_ELEMENT,
  templateUrl: './data-flow.component.html',
  styleUrls: ['./data-flow.component.scss']
})
export class LcuLimitedTrialDataFlowElementComponent extends LcuElementComponent<LcuLimitedTrialDataFlowContext> implements OnInit {
  //  Fields
  protected subscriptions: { [key: string]: Subscription };

  //  Properties
  public DataFlowLists: { emulatedDataFlows: DataFlow[], trialDataFlows: DataFlow[] };

  public State: LimitedDataFlowManagementState;

  //  Constructors
  constructor(
    protected dialog: MatDialog,
    protected injector: Injector,
    protected dataFlowEventService: DataFlowManagerEventService,
    protected dfMgmt: LimitedDataFlowManagementStateContext
  ) {
    super(injector);

    this.DataFlowLists = { emulatedDataFlows: [], trialDataFlows: [] };

    this.subscriptions = {
      deleteDataFlow: this.deleteDataFlow(),
      deployDataFlow: this.deployDataFlow(),
      saveDataFlow: this.saveDataFlow(),
      setActiveDataFlow: this.setActiveDataFlow(),
      toggleCreationModules: this.toggleCreationModules(),
      toggleIsCreating: this.toggleIsCreating()
    };
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    this.dfMgmt.Context.subscribe(async (state: any) => {
      this.State = state;
      console.log('Successfully loaded State: ', this.State);
      // this.State.DataFlows = this.populateDataFlows();

      await this.handleStateChanges();
    });
  }

  //  API Methods
  public ToggleIsCreating(): void {
    this.State.Loading = true;

    this.dfMgmt.ToggleIsCreating();
  }

  //  Helpers
  protected handleStateChanges(): void {
    console.log('this.State', this.State);

    // const ids = this.State.EmulatedDataFlowIDs;
    if (this.State && this.State.DataFlows) {
      const ids = ['690e235c-0216-46b7-93f1-3cf002033ac6'];

      if (ids && ids.length) {
        this.DataFlowLists.emulatedDataFlows = this.State.DataFlows.filter((df: DataFlow) => {
          return ids.find((id: string) => df.ID === id);
        });
        console.log('this.EmulatedDataFlows', this.DataFlowLists.emulatedDataFlows);
        this.DataFlowLists.trialDataFlows = this.State.DataFlows.filter((df: DataFlow) => {
          return ids.find((id: string) => df.ID !== id);
        });
        console.log('this.TrialDataFlows', this.DataFlowLists.trialDataFlows);
      } else {
        this.DataFlowLists.emulatedDataFlows = [];
        this.DataFlowLists.trialDataFlows = [];
      }
    }

  }

  protected openProvisioningDialog(): void {
    this.dialog.open(ProvisioningModalComponent, {
      width: '610px',
      data: null
    });
  }

  protected deleteDataFlow(): Subscription {
    return this.dataFlowEventService.GetDeleteDataFlowEvent().subscribe(
      (dataFlowLookup: string) => {
        this.State.Loading = true;
        this.dfMgmt.DeleteDataFlow(dataFlowLookup);
      }
    );
  }

  protected deployDataFlow(): Subscription {
    return this.dataFlowEventService.GetDeployDataFlowEvent().subscribe(
      (dataFlowLookup: string) => {
        this.openProvisioningDialog();
      }
    );
  }

  protected saveDataFlow(): Subscription {
    return this.dataFlowEventService.GetSaveDataFlowEvent().subscribe(
      (dataFlow: DataFlow) => {
        this.State.Loading = true;
        this.dfMgmt.SaveDataFlow(dataFlow);
      }
    );
  }

  protected setActiveDataFlow(): Subscription {
    return this.dataFlowEventService.GetSetActiveDataFlowEvent().subscribe(
      (dataFlowLookup: string) => {
        this.State.Loading = true;
        this.dfMgmt.SetActiveDataFlow(dataFlowLookup);
      }
    );
  }

  protected toggleCreationModules(): Subscription {
    return this.dataFlowEventService.GetToggleCreationModulesEvent().subscribe(
      () => {
        this.State.Loading = true;
        this.dfMgmt.ToggleCreationModules();
      }
    );
  }

  protected toggleIsCreating(): Subscription {
    return this.dataFlowEventService.GetToggleIsCreatingEvent().subscribe(
      () => {
        this.ToggleIsCreating();
      }
    );
  }








  private populateDataFlows(): DataFlow[] {
    return [
      {
        Description: `A IoT data flow based on Fathym's best practices`,
        Lookup: 'iot',
        ModulePacks: null,
        Name: 'IoT Best Practices',
        Output: {
          Modules: [],
          Streams: [],
          // @ts-ignore
          Created: null,
          ID: '00000000-0000-0000-0000-000000000000',
          Modified: null
        },
        Created: null,
        ID: '690e235c-0216-46b7-93f1-3cf002033ac6',
        Modified: null,
        Registry: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7|lcu-int|DataFlow',
        EnterpriseAPIKey: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7'
      },
      {
        Description: 'Try it out',
        Lookup: 'bob',
        ModulePacks: null,
        Name: 'Bobby-Test',
        Output: {
          Modules: [
            {
              Deleted: false,
              Display: {
                Actions: null,
                Category: 'Emulators',
                Element: 'lcu-data-flow-iot-provisioning-pack-data-emulator-element',
                Height: 200,
                Icon: {
                  Icon: 'input',
                  IconSet: null
                },
                Left: 0,
                ModuleType: 'data-emulator',
                // @ts-ignore
                Shape: 'Rectangle',
                Toolkit: 'https://www.fathym-int.com/_lcu/lcu-data-flow-iot-provisioning-pack-lcu/wc/lcu-data-flow-iot-provisioning-pack.lcu.js',
                Top: 0,
                Width: 200,
                Created: null,
                ID: '00000000-0000-0000-0000-000000000000',
                Modified: null
              },
              ControlType: 0,
              Settings: {},
              // @ts-ignore
              Status: {
                Code: 0,
                Message: 'Success'
              },
              Text: 'Dummy Data',
              Created: null,
              ID: '60b14aaa-c79b-4af2-885d-1d57c832eae9',
              Modified: null
            },
            {
              Deleted: false,
              Display: {
                Actions: null,
                Category: 'Storage',
                Element: 'lcu-data-flow-iot-provisioning-pack-cold-storage-element',
                Height: 200,
                Icon: {
                  Icon: 'assessment',
                  IconSet: null
                },
                Left: 350,
                ModuleType: 'cold-storage',
                // @ts-ignore
                Shape: 'Ellipse',
                Toolkit: 'https://www.fathym-int.com/_lcu/lcu-data-flow-iot-provisioning-pack-lcu/wc/lcu-data-flow-iot-provisioning-pack.lcu.js',
                Top: 0,
                Width: 200,
                Created: null,
                ID: '00000000-0000-0000-0000-000000000000',
                Modified: null
              },
              ControlType: 0,
              Settings: {
                Infrastructure: {
                  Connections: {
                    key1: 'DefaultEndpointsProtocol=https;AccountName=storageaccountlcuin855f;AccountKey=clTCT5YNnPbelAX1fspyUXCZIiwXD7nndGKy8CHMyP9SPpLPKtL5jtzwWN1yYyZN0+TsBKrhTaDnTB9iC6xLIQ==;EndpointSuffix=core.windows.net',
                    key2: 'DefaultEndpointsProtocol=https;AccountName=storageaccountlcuin855f;AccountKey=kEoHvRRhRlvCMNmuaclB5pM3O7/Y7mVu6j5lp0TD4Chr+vReMOQbXfsUm4k2jIappw8xldeP26Y+elcRT05j5g==;EndpointSuffix=core.windows.net'
                  },
                  DisplayName: 'storageaccountlcuin855f',
                  Group: '',
                  Lookup: 'cold-storage|storageaccountlcuin855f',
                  Name: 'storageaccountlcuin855f'
                }
              },
              Status: {
                Code: 0,
                Message: 'Success',
                // @ts-ignore
                QuickView: {
                  Chart: {
                    Results: [
                      {
                        data: [
                          0,
                          5045,
                          0,
                          5044,
                          0,
                          5043
                        ],
                        label: 'Egress'
                      },
                      {
                        data: [
                          0,
                          31540,
                          0,
                          31540,
                          0,
                          31540
                        ],
                        label: 'Ingress'
                      }
                    ],
                    Labels: [
                      '19:53',
                      '20:23',
                      '20:53',
                      '21:23',
                      '21:53',
                      '22:23'
                    ],
                    Colors: [
                      {},
                      {}
                    ],
                    Options: {
                      maintainAspectRatio: false,
                      responsive: true,
                      scales: {
                        xAxes: [
                          {}
                        ],
                        yAxes: [
                          {
                            id: 'y-axis-0',
                            position: 'left'
                          }
                        ]
                      },
                      annotation: {
                        annotations: [
                          {
                            type: 'line',
                            mode: 'vertical',
                            scaleID: 'x-axis-0',
                            value: 'March',
                            borderColor: 'orange',
                            borderWidth: 2,
                            label: {
                              enabled: true,
                              fontColor: 'orange',
                              content: 'LineAnno'
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              },
              Text: 'Cold Storage',
              Created: null,
              ID: 'b47ebb82-16dd-4681-b8b5-3224e6f76ef5',
              Modified: null
            }
          ],
          Streams: [
            {
              InputModuleID: '60b14aaa-c79b-4af2-885d-1d57c832eae9',
              OutputModuleID: 'b47ebb82-16dd-4681-b8b5-3224e6f76ef5',
              Title: '',
              // @ts-ignore
              Created: null,
              ID: 'e11eb267-7d96-4064-962d-d58c5f2a7fc8',
              Modified: null
            }
          ],
          Created: null,
          ID: '00000000-0000-0000-0000-000000000000',
          Modified: null
        },
        Created: null,
        ID: 'efe212d8-03ec-48f2-948b-683a81bac321',
        Modified: null,
        Registry: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7|lcu-int|DataFlow',
        EnterpriseAPIKey: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7'
      },
      {
        Description: `A User's limited trial test data flow`,
        Lookup: 'tst',
        ModulePacks: null,
        Name: 'User Test',
        Output: {
          Modules: [],
          Streams: [],
          // @ts-ignore
          Created: null,
          ID: '00000000-0000-0000-0000-000000000000',
          Modified: null
        },
        Created: null,
        ID: 'ae64c061-b552-4a4d-9e26-6e31a7d787bb',
        Modified: null,
        Registry: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7|lcu-int|DataFlow',
        EnterpriseAPIKey: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7'
      },
      {
        Description: 'Another Limited Trial Data Flow',
        Lookup: 'flw',
        ModulePacks: null,
        Name: 'Fathym',
        Output: {
          Modules: [],
          Streams: [],
          // @ts-ignore
          Created: null,
          ID: '00000000-0000-0000-0000-000000000000',
          Modified: null
        },
        Created: null,
        ID: '7413e61c-bc56-44a4-80ed-2adcb6b6e0ca',
        Modified: null,
        Registry: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7|lcu-int|DataFlow',
        EnterpriseAPIKey: '3ebd1c0d-22d0-489e-a46f-3260103c8cd7'
      }
    ];
  }


}
