import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContestationComponent } from './contestation/contestation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';
import { EspaceResponsableComponent } from './espace-responsable/espace-responsable.component';
import { EspaceEnseignantComponent } from './espace-enseignant/espace-enseignant.component';
import { RouterModule } from '@angular/router';
import { CopieComponent } from './copie/copie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContestationComponent,
    LoginComponent,
    RegisterComponent,
    EspaceEtudiantComponent,
    EspaceResponsableComponent,
    EspaceEnseignantComponent,
    CopieComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
