import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyNowTemplateComponent } from './buy-now-template.component';

describe('BuyNowTemplateComponent', () => {
  let component: BuyNowTemplateComponent;
  let fixture: ComponentFixture<BuyNowTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyNowTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyNowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
