import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class ListItemModel {
  Name: string;
  Description: string;
  MaterialIcon: string;
}

@Component({
  selector: 'lcu-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  /**
   * local variable for app data getter/setter
   */
  private _listData: Array<ListItemModel>;

  // tslint:disable-next-line:no-input-rename
  @Input('list-data')
  set ListData(val: Array<ListItemModel>) {
    this._listData = val;

    // this.separateAppTypes();
  }

  get ListData(): Array<ListItemModel> {
    return this._listData;
  }

  // tslint:disable-next-line:no-output-rename
  @Output('selected-app')
  public SelectedItem: EventEmitter<ListItemModel>;

  constructor() {
    this.SelectedItem = new EventEmitter<ListItemModel>();
   }

  ngOnInit(): void {
  }

  public SetActiveItem(item: ListItemModel): void {
    this.SelectedItem.emit(item);
  }
}
