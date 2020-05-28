import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAppsConfigComponent } from './data-apps-config.component';

describe('DataAppsConfigComponent', () => {
  let component: DataAppsConfigComponent;
  let fixture: ComponentFixture<DataAppsConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAppsConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAppsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
