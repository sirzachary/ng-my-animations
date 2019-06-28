import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Combo1Component } from './combo1.component';

describe('Combo1Component', () => {
  let component: Combo1Component;
  let fixture: ComponentFixture<Combo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Combo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Combo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
