import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuLimitedTrialWelcomeElementComponent } from './elements/welcome/welcome.component';
import { LcuLimitedTrialDataAppsElementComponent } from './elements/data-apps/data-apps.component';
import { LcuLimitedTrialDataFlowElementComponent } from './elements/data-flow/data-flow.component';
import { AppListComponent } from './controls/data-apps/app-list/app-list.component';
import { LimitedDataAppsManagementStateContext } from './state/data-apps/limited-data-apps-management-state.context';
import { LimitedDataFlowManagementStateContext } from './state/data-flow/limited-data-flow-management-state.context';
import { DataAppsConfigComponent } from './controls/data-apps/data-apps-config/data-apps-config.component';

@NgModule({
  declarations: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent,
    AppListComponent,
    DataAppsConfigComponent
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent,
    AppListComponent,
    DataAppsConfigComponent
  ],
  entryComponents: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent,
    AppListComponent,
    DataAppsConfigComponent
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
