import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAppComponent } from './data-app.component';

describe('DataAppComponent', () => {
  let component: DataAppComponent;
  let fixture: ComponentFixture<DataAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
