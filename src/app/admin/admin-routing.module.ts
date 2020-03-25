import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminComponent,
    children: [
      { path: 'tickets', component: TicketsComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
