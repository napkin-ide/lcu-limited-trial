import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lcu-provisioning-modal',
  templateUrl: './provisioning-modal.component.html',
  styleUrls: ['./provisioning-modal.component.scss']
})
export class ProvisioningModalComponent {

  constructor(
    private dialogRef: MatDialogRef<ProvisioningModalComponent>,
    @Inject(MAT_DIALOG_DATA) public Data: any
  ) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public UpgradeNow(): void {
    window.location.href = 'https://fathym.com/pricing/';
  }
}
