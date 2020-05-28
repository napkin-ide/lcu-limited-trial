import { DialogComponent } from './../../../controls/modals/dialog/dialog.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, FormControl } from '@angular/forms';
import { debounceTime, switchMap, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LimitedDataAppsManagementState } from '../../../state/data-apps/limited-data-apps-management.state';
import { LimitedDataAppsManagementStateContext } from '../../../state/data-apps/limited-data-apps-management-state.context';
import { NPMService } from '@napkin-ide/lcu-data-apps-common';
import { DAFViewApplicationConfig } from '@lcu/common';
import { BuyNowTemplateComponent } from '../modal-templates/buy-now-template/buy-now-template.component';
import { DialogModel } from '../../../models/dialog.model';

@Component({
  selector: 'lcu-data-apps-config',
  templateUrl: './data-apps-config.component.html',
  styleUrls: ['./data-apps-config.component.scss']
})
export class DataAppsConfigComponent implements OnInit {

  // Properties

  /**
   * Data view app form group
   */
  public DAFViewAppFormGroup: FormGroup;

  /**
   * Disable / Enable fields
   */
  public DisableFormFields: boolean;

  /**
   * Array of NPM packages and versions, when doing an NPM package search
   */
  public NPMPackages: { Name: string; NPMLink: string; Version: string }[];

  /**
   * List of NPM package versions
   */
  public NPMPackageVersions: Array<string>;

  /**
   * Save data form group
   */
  public SaveDataAppFormGroup: FormGroup;

  /**
   * Data Apps state data
   */
  public State: LimitedDataAppsManagementState;

  /**
   * Public/Private toggle label
   */
  public ToggleLabel: string;

  /**
   * Public/Private tooltip value
   */
  public ToggleTooltip: string;

  // Fields

  /**
   * NPM package field
   */
  public get NPMPackageControl(): AbstractControl {
    return this.DAFViewAppFormGroup.get('npmPkg');
  }

  /**
   * NPM package version
   */
  public get NPMPackageVersionControl(): AbstractControl {
    return this.DAFViewAppFormGroup.get('pkgVer');
  }

  /**
   * App ID field
   */
  public get AppIdControl(): AbstractControl {
    return this.DAFViewAppFormGroup.get('appId');
  }

  /**
   * IsPrivate field
   */
  public get IsPrivateControl(): AbstractControl {
    return this.DAFViewAppFormGroup.get('isPrivate');
  }

  constructor(protected state: LimitedDataAppsManagementStateContext,
              protected formBldr: FormBuilder,
              protected npm: NPMService) {

                this.DisableFormFields = true;
                this.ToggleLabel = 'App is Public';
                this.ToggleTooltip = 'App is set to public';
  }

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

    if (!this.NPMPackageVersionControl.value) {
      this.NPMPackageVersionControl.value.setValue(pkg.Version);
    }
  }

  // public SaveAppView(): void {
  //   this.State.Loading = true;

  //   this.state.SaveAppView({
  //     ...this.State.ActiveDAFApp,
  //     NPMPackage: this.NPMPackageControl.value,
  //     PackageVersion: this.NPMPackageVersionControl.value
  //   });
  // }

  public SaveDAFApp(): void {

    this.state.SaveDAFApp({
      ...this.State.CurrentAppView,
      NPMPackage: this.NPMPackageControl.value,
      PackageVersion: this.NPMPackageVersionControl.value });
  }

  /**
   * Setup the form
   */
  protected setupForm(): void {
    this.SaveDataAppFormGroup = this.formBldr.group({
      name: new FormControl({ value: '', disabled: this.DisableFormFields }, [Validators.required]),
      desc: new FormControl({ value: '', disabled: this.DisableFormFields }, [Validators.required]),
      path: new FormControl({ value: '', disabled: this.DisableFormFields }, [Validators.required])
    });

    this.DAFViewAppFormGroup = this.formBldr.group({
      npmPkg: new FormControl({ value: '', disabled: this.DisableFormFields }, [Validators.required]),
      pkgVer: new FormControl({ value: '', disabled: false }, [Validators.required]),
      appId: new FormControl({ value: '', disabled: this.DisableFormFields }, [Validators.required]),
      isPrivate: new FormControl({ value: false, disabled: true }, [Validators.required])
    });

    this.onChanges();
  }

  protected onChanges(): void {
    this.NPMPackageControl.valueChanges
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

    this.IsPrivateControl.valueChanges.subscribe((val: boolean) => {
      this.ToggleLabel = val ? 'App is Private' : 'App is Public';
      this.ToggleTooltip = val ? 'App is set to private' : 'App is set to public';
    });
  }

  /**
   * Do something when state changes
   */
  protected handleStateChanges(): void {
    console.log('data-apps-config', this.State);

    this.State.CurrentAppView = this.State.ActiveDAFApp;

    this.setNPMPackage();
    this.setSaveDataApp();
  }

  protected setNPMPackage(): void {

    if (this.DAFViewAppFormGroup) {
      if (this.State.CurrentAppView) {

        this.NPMPackageControl.setValue(this.State.CurrentAppView.NPMPackage);
        this.NPMPackageVersionControl.setValue(this.State.CurrentAppView.PackageVersion);
        this.NPMPackageVersions = this.npmVersionLookup();

        this.AppIdControl.setValue(this.State.CurrentAppView.ID);

      } else {
        this.DAFViewAppFormGroup.reset();
      }
    }
  }

  /**
   * Return array of npm versions
   */
  protected npmVersionLookup(): Array<string> {
    let versions: Array<string>;
    Object.entries(this.State.VersionLookups).find((el: object) => {
      if (el[0] === this.State.CurrentAppView.NPMPackage) {
        versions = el[1];
      }
      return;
    });

    return versions;
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
