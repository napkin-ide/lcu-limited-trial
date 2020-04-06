import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ThemeColorPickerService } from '@lcu/common';

@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ThemeClass: BehaviorSubject<string>;
  public Themes: Array<any>;
  public Title = 'Fathym Limited Trial';

  constructor(
    protected themeService: ThemeColorPickerService
  ) { }

  public ngOnInit(): void {
  }

}
