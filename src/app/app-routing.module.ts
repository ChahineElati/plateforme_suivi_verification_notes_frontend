import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbComponent } from './dashb/dashb.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path: "", component: DashbComponent},
  {path: "tables", component: TablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
