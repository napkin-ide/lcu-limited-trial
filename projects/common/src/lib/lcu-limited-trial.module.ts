import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuLimitedTrialWelcomeElementComponent, SafePipe } from './elements/welcome/welcome.component';
import { LcuLimitedTrialDataAppsElementComponent } from './elements/data-apps/data-apps.component';
import { LcuLimitedTrialDataFlowElementComponent } from './elements/data-flow/data-flow.component';
import { AppListComponent } from './controls/data-apps/app-list/app-list.component';
import { LimitedDataAppsManagementStateContext } from './state/data-apps/limited-data-apps-management-state.context';
import { LimitedDataFlowManagementStateContext } from './state/data-flow/limited-data-flow-management-state.context';
import { ListItemComponent } from './controls/list-item/list-item.component';
import { LcuDataFlowModule } from '@napkin-ide/lcu-data-flow-common';
import { AddAppComponent } from './elements/data-apps/add-app/add-app.component';
import { ProvisioningModalComponent } from './elements/data-flow/modals/provisioning-modal/provisioning-modal.component';
import { DataAppsConfigComponent } from './elements/data-apps/data-apps-config/data-apps-config.component';
import { JourneyCardComponent } from './elements/welcome/journey-card/journey-card.component';

@NgModule({
  declarations: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent,
    ListItemComponent,
    ProvisioningModalComponent,
    DataAppsConfigComponent,
    AppListComponent,
    AddAppComponent,
    SafePipe,
    JourneyCardComponent
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    LcuDataFlowModule.forRoot()
  ],
  exports: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent,
    ListItemComponent,
    DataAppsConfigComponent,
    JourneyCardComponent,
    AppListComponent,
    AddAppComponent // need to remove this one and replace with the ListItemComponent
  ],
  entryComponents: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent,
    ListItemComponent,
    ProvisioningModalComponent,
    DataAppsConfigComponent,
    JourneyCardComponent,
    AppListComponent,
    AddAppComponent // need to remove this one and replace with the ListItemComponent
  ]
})
export class LcuLimitedTrialModule {
  static forRoot(): ModuleWithProviders<LcuLimitedTrialModule> {
    return {
      ngModule: LcuLimitedTrialModule,
      providers: [
        LimitedDataAppsManagementStateContext,
        LimitedDataFlowManagementStateContext
      ]
    };
  }
}
