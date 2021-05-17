import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRouterOutletsComponent } from './multiple-router-outlets.component';

describe('MultipleRouterOutletsComponent', () => {
  let component: MultipleRouterOutletsComponent;
  let fixture: ComponentFixture<MultipleRouterOutletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleRouterOutletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleRouterOutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
