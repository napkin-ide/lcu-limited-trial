import { DataAppComponent } from './controls/data-app/data-app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './controls/home/home.component';
import { DataFlowComponent } from './controls/data-flow/data-flow.component';
// import { DocumentationComponent } from './controls/documentation/documentation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'data-app', component: DataAppComponent },
  { path: 'data-flow', component: DataFlowComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
