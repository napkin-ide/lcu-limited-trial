import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { debounceTime, switchMap, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { LimitedDataAppsManagementState } from '../../../state/data-apps/limited-data-apps-management.state';
import { LimitedDataAppsManagementStateContext } from '../../../state/data-apps/limited-data-apps-management-state.context';
import { NPMService } from '../../../state/limited-trial/npm.service';

@Component({
  selector: 'lcu-data-apps-config',
  templateUrl: './data-apps-config.component.html',
  styleUrls: ['./data-apps-config.component.scss']
})
export class DataAppsConfigComponent implements OnInit {

  // Properties
  public DAFViewAppFormGroup: FormGroup;

  public NPMPackages: { Name: string; NPMLink: string; Version: string }[];

  public SaveDataAppFormGroup: FormGroup;

  public State: LimitedDataAppsManagementState;

  constructor(protected state: LimitedDataAppsManagementStateContext,
              protected formBldr: FormBuilder,
              protected npm: NPMService) { }

  public ngOnInit(): void {

    this.setupForm();

    /**
     * Listen for state changes
     */
    this.state.Context.subscribe((state: any) => {
      this.State = state;

      this.handleStateChanges();
    });
  }

  /**
   * 
   * @param appId id of active app
   */
  public CopyAppIdToClipBoard(appId: string) {
    let selected: any = false;

    const el = document.createElement('textarea');

    el.value = appId;

    el.setAttribute('readonly', '');

    el.style.position = 'absolute';

    el.style.left = '-9999px';

    el.style.opacity = '0';

    document.body.appendChild(el);

    if (document.getSelection().rangeCount > 0) {
      selected = document.getSelection().getRangeAt(0);
    }

    el.select();

    document.execCommand('copy', false);

    document.body.removeChild(el);

    if (selected) {
      document.getSelection().removeAllRanges();

      document.getSelection().addRange(selected);
    }
  }

  /**
   * 
   * @param event mat option selected event
   */
  public PackageSelected(event: MatAutocompleteSelectedEvent) {
    const pkg = this.NPMPackages.find(p => p.Name === event.option.value);

    if (!this.DAFViewAppFormGroup.controls.pkgVer.value) {
      this.DAFViewAppFormGroup.controls.pkgVer.setValue(pkg.Version);
    }
  }

  public SaveAppView() {
    this.State.Loading = true;

    this.state.SaveAppView({
      ...this.State.ActiveView,
      NPMPackage: this.DAFViewAppFormGroup.controls.npmPkg.value,
      PackageVersion: this.DAFViewAppFormGroup.controls.pkgVer.value
    });
  }

  /**
   * Setup the form
   */
  protected setupForm(): void {
    this.SaveDataAppFormGroup = this.formBldr.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      path: ['', Validators.required]
    });

    this.DAFViewAppFormGroup = this.formBldr.group({
      npmPkg: ['', Validators.required],
      pkgVer: ['', Validators.required]
    });

    this.onChanges();
  }

  protected onChanges(): void {
    this.DAFViewAppFormGroup.controls.npmPkg.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(value => this.npm.Search(value ? value.toString() : '')),
        map(val => {
          return val.Model ? val.Model.Items.map(i => {
            return {
              Name: i.package.name,
              Version: i.package.version,
              NPMLink: i.package.links.npm
            };
          }) : [];
        })
      )
      .subscribe(packages => {
        this.NPMPackages = packages;
      });
  }

  protected handleStateChanges(): void {
    console.log('data-apps-config', this.State);

    this.setNPMPackage();
    this.setSaveDataApp();
  }

  protected setNPMPackage(): void {

    // if (this.DAFViewAppFormGroup) {
    //   if (this.State.ActiveView) {
    //     this.DAFViewAppFormGroup.controls.npmPkg.setValue(this.State.ActiveView.NPMPackage);

    //     this.DAFViewAppFormGroup.controls.pkgVer.setValue(this.State.ActiveView.PackageVersion);
    //   } else {
    //     this.DAFViewAppFormGroup.reset();
    //   }
    // }

    if (this.DAFViewAppFormGroup) {
      if (this.State.ActiveDAFApp) {
        this.DAFViewAppFormGroup.controls.npmPkg.setValue( this.State.ActiveDAFApp['NPMPackage']);
        this.DAFViewAppFormGroup.controls.pkgVer.setValue( this.State.ActiveDAFApp['PackageVersion']);
      } else {
        this.DAFViewAppFormGroup.reset();
      }
    }
  }

  protected setSaveDataApp(): void {
    if (this.SaveDataAppFormGroup) {
      if (this.State.ActiveApp) {
        //  TODO: Why this isn't working?

        this.SaveDataAppFormGroup.patchValue({
          'name': this.State.ActiveApp.Name,
          'path': this.State.ActiveApp.PathRegex.replace('*', ''),
          'desc': this.State.ActiveApp.Description || ''
        });
      } else {
        this.SaveDataAppFormGroup.reset();
      }
    }
  }

}
