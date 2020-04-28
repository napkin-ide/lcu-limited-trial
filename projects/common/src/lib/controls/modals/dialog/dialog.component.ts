import { DialogModel } from './../../../models/dialog.model';
import { Component,
  OnInit, Inject, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, OnDestroy, ComponentFactory } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lcu-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {

  @ViewChild('target', { read: ViewContainerRef }) vcRef: ViewContainerRef;

  protected componentRef: ComponentRef<any>;

  constructor(
    protected dialogRef: MatDialogRef<DialogComponent>,
    protected resolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public Data: DialogModel) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.renderComponent();
    }, 1);
  }

  public OnNoClick(): void {
    this.dialogRef.close();
  }

  public Accept(): void {
    window.open('https://fathym.com/pricing/', '_blank');
  }

  public ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  protected renderComponent(): void {
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(this.Data.Component);
    this.componentRef = this.vcRef.createComponent(factory);
  }

}
