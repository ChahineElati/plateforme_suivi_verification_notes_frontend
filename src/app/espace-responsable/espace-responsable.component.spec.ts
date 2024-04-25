import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceResponsableComponent } from './espace-responsable.component';

describe('EspaceResponsableComponent', () => {
  let component: EspaceResponsableComponent;
  let fixture: ComponentFixture<EspaceResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceResponsableComponent]
    });
    fixture = TestBed.createComponent(EspaceResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
