import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LimitedDataAppsManagementState } from '../../../state/data-apps/limited-data-apps-management.state';
import { LimitedDataAppsManagementStateContext } from '../../../state/data-apps/limited-data-apps-management-state.context';
import { Application } from '@lcu/common';


@Component({
  selector: 'lcu-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.scss']
})
export class AddAppComponent implements OnInit {

  // Properties
  /**
   * Data Apps state data
   */
  // tslint:disable-next-line:no-input-rename
  @Input('state')
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
   * App ID field
   */
  public get NameControl(): AbstractControl {
    return this.NewDataAppFormGroup.get('name');
  }

  /**
   * Description field
   */
  public get DescriptionControl(): AbstractControl {
    return this.NewDataAppFormGroup.get('desc');
  }

  /**
   * Path field
   */
  public get PathControl(): AbstractControl {
    return this.NewDataAppFormGroup.get('path');
  }

  /**
   * IsPrivate field
   */
  public get IsPrivateControl(): AbstractControl {
    return this.NewDataAppFormGroup.get('isPrivate');
  }

  /**
   * New Data App FormGroup
   */
  public NewDataAppFormGroup: FormGroup;

  constructor(
    protected formBldr: FormBuilder,
    protected state: LimitedDataAppsManagementStateContext) { 

      this.ToggleLabel = 'App is Public';
      this.ToggleTooltip = 'App is set to public';
    }

    // Lifecycle
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

  // API
  /**
   * Save the new app
   *
   * @param isPrivate whether the app is public or private
   */
  public CreateApp() {
    this.State.Loading = true;

    const app: Application = {
      Name: this.NameControl.value,
      Description: this.DescriptionControl.value,
      PathRegex: this.PathControl.value,
      IsPrivate: this.IsPrivateControl.value
    };

    this.state.SaveDataApp(app);
  }

  // Helpers
  /**
   * Setup add app form
   */
  protected setupForm(): void {
    this.NewDataAppFormGroup = this.formBldr.group({
      name: new FormControl({ value: '', disabled: this.State.Loading }, [Validators.required]),
      desc: new FormControl({ value: '', disabled: this.State.Loading }, [Validators.required]),
      path: new FormControl({ value: '', disabled: this.State.Loading }, [Validators.required]),
      isPrivate: new FormControl({ value: false, disabled: this.State.Loading }, [Validators.required])
    });

    this.onChange();
  }

  /**
   * Listen for form changes
   */
  protected onChange(): void {
    this.IsPrivateControl.valueChanges.subscribe((val: boolean) => {
      this.ToggleLabel = val ? 'App is Private' : 'App is Public';
      this.ToggleTooltip = val ? 'App is set to private': 'App is set to public';
    });
  }

  /**
   * Handle state changes
   */
  protected handleStateChanges(): void {

  }

}
