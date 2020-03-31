import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuLimitedTrialWelcomeElementComponent } from './elements/welcome/welcome.component';
import { LcuLimitedTrialDataAppsElementComponent } from './elements/data-apps/data-apps.component';
import { LcuLimitedTrialDataFlowElementComponent } from './elements/data-flow/data-flow.component';
import { LimitedTrialStateContext } from './state/limited-trial/limited-trial-state.context';
import { ListItemComponent } from './controls/list-item/list-item.component';

@NgModule({
  declarations: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent,
    ListItemComponent
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
    ListItemComponent
  ],
  entryComponents: [
    LcuLimitedTrialWelcomeElementComponent,
    LcuLimitedTrialDataAppsElementComponent,
    LcuLimitedTrialDataFlowElementComponent,
    ListItemComponent
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
