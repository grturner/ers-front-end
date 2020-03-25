import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';


@NgModule({
  declarations: [UsersComponent, ViewTicketComponent, CreateTicketComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
