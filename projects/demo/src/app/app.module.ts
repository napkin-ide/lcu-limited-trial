import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule, LCUServiceSettings } from '@lcu/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './controls/home/home.component';
// import { DocumentationComponent } from './controls/documentation/documentation.component';
// import { LcuDocumentationModule } from '@lowcodeunit/lcu-documentation-common';
import { LcuLimitedTrialModule } from '@napkin-ide/lcu-limited-trial-common';
import { DataAppComponent } from './controls/data-app/data-app.component';
import { DataFlowComponent } from './controls/data-flow/data-flow.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataAppComponent,
    DataFlowComponent
    // DocumentationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    MaterialModule,
    FlexLayoutModule,
    // LcuDocumentationModule.forRoot(),
    LcuLimitedTrialModule.forRoot()
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  bootstrap: [AppComponent],
  exports: [LcuLimitedTrialModule, DataAppComponent, DataFlowComponent],
  entryComponents: [DataAppComponent, DataFlowComponent]
})
export class AppModule {}
