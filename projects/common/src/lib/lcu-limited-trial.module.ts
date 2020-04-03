import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuLimitedTrialWelcomeElementComponent } from './elements/welcome/welcome.component';
import { LcuLimitedTrialDataAppsElementComponent } from './elements/data-apps/data-apps.component';
import { LcuLimitedTrialDataFlowElementComponent } from './elements/data-flow/data-flow.component';
import { LimitedDataAppsManagementStateContext } from './state/data-apps/limited-data-apps-management-state.context';
import { LimitedDataFlowManagementStateContext } from './state/data-flow/limited-data-flow-management-state.context';
import { ListItemComponent } from './controls/list-item/list-item.component';
import { LcuDataFlowModule } from '@napkin-ide/lcu-data-flow-common';
import { ConfirmationModalComponent } from './elements/data-flow/modals/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent,
    ListItemComponent,
    ConfirmationModalComponent
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
    ListItemComponent
  ],
  entryComponents: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent,
    ListItemComponent,
    ConfirmationModalComponent
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
