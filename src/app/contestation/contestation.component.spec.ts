import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestationComponent } from './contestation.component';

describe('ContestationComponent', () => {
  let component: ContestationComponent;
  let fixture: ComponentFixture<ContestationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContestationComponent]
    });
    fixture = TestBed.createComponent(ContestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
