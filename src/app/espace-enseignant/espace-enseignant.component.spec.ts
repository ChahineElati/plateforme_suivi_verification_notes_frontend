import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceEnseignantComponent } from './espace-enseignant.component';

describe('EspaceEnseignantComponent', () => {
  let component: EspaceEnseignantComponent;
  let fixture: ComponentFixture<EspaceEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceEnseignantComponent]
    });
    fixture = TestBed.createComponent(EspaceEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
