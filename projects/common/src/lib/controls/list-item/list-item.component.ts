import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItemModel } from '../../models/list-item.model';

@Component({
  selector: 'lcu-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

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
  @Output('deleted-item')
  public DeletedItem: EventEmitter<ListItemModel>;

  // tslint:disable-next-line:no-output-rename
  @Output('selected-item')
  public SelectedItem: EventEmitter<ListItemModel>;


  constructor() {
    this.DeletedItem = new EventEmitter<ListItemModel>();
    this.SelectedItem = new EventEmitter<ListItemModel>();
  }

  public ngOnInit(): void { }

  public DeleteItem(item: ListItemModel): void {
    this.DeletedItem.emit(item);
  }

  public SetActiveItem(item: ListItemModel): void {
    this.SelectedItem.emit(item);
  }
}
