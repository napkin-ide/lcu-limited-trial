import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';
import { LcuLimitedTrialModule, LcuLimitedTrialWelcomeElementComponent, SELECTOR_LCU_LIMITED_TRIAL_WELCOME_ELEMENT, LcuLimitedTrialDataAppsElementComponent, SELECTOR_LCU_LIMITED_TRIAL_DATA_APPS_ELEMENT, LcuLimitedTrialDataFlowElementComponent, SELECTOR_LCU_LIMITED_TRIAL_DATA_FLOW_ELEMENT } from '@napkin-ide/lcu-limited-trial-common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    LcuLimitedTrialModule.forRoot()
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: [LcuLimitedTrialModule]
})
export class AppModule implements DoBootstrap {
	constructor(protected injector: Injector) {}

	public ngDoBootstrap() {
		const welcome = createCustomElement(LcuLimitedTrialWelcomeElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_LCU_LIMITED_TRIAL_WELCOME_ELEMENT, welcome);
	
		const dataApps = createCustomElement(LcuLimitedTrialDataAppsElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_LCU_LIMITED_TRIAL_DATA_APPS_ELEMENT, dataApps);
	
		const dataFlow = createCustomElement(LcuLimitedTrialDataFlowElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_LCU_LIMITED_TRIAL_DATA_FLOW_ELEMENT, dataFlow);
	}
}
