import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component'

const routes: Routes = [
  { 
    path: '',
    component: UsersComponent,
    children: [
      { path: 'create-ticket', component: CreateTicketComponent },
      { path: 'view-ticket', component: ViewTicketComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
