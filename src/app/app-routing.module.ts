import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestationComponent } from './contestation/contestation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';
import { EspaceResponsableComponent } from './espace-responsable/espace-responsable.component';
import { EspaceEnseignantComponent } from './espace-enseignant/espace-enseignant.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //default route
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'espace_etudiant', component: EspaceEtudiantComponent },
  { path: 'espace_responsable', component: EspaceResponsableComponent },
  { path: 'espace_enseignant', component: EspaceEnseignantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
