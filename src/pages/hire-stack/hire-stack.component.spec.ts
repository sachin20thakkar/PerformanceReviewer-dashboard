import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireStackComponent } from './hire-stack.component';

describe('HireStackComponent', () => {
  let component: HireStackComponent;
  let fixture: ComponentFixture<HireStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
