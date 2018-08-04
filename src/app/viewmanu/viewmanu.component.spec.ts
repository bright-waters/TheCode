import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmanuComponent } from './viewmanu.component';

describe('ViewmanuComponent', () => {
  let component: ViewmanuComponent;
  let fixture: ComponentFixture<ViewmanuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmanuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmanuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
