import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuLimitedTrialWelcomeElementComponent } from './elements/welcome/welcome.component';
import { LcuLimitedTrialDataAppsElementComponent } from './elements/data-apps/data-apps.component';
import { LcuLimitedTrialDataFlowElementComponent } from './elements/data-flow/data-flow.component';
import { LimitedTrialStateContext } from './state/limited-trial/limited-trial-state.context';

@NgModule({
  declarations: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent
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
    LcuLimitedTrialDataFlowElementComponent
  ],
  entryComponents: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent
  ]
})
export class LcuLimitedTrialModule {
  static forRoot(): ModuleWithProviders<LcuLimitedTrialModule> {
    return {
      ngModule: LcuLimitedTrialModule,
      providers: [LimitedTrialStateContext]
    };
  }
}
