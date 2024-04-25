import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceEtudiantComponent } from './espace-etudiant.component';

describe('EspaceEtudiantComponent', () => {
  let component: EspaceEtudiantComponent;
  let fixture: ComponentFixture<EspaceEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceEtudiantComponent]
    });
    fixture = TestBed.createComponent(EspaceEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
