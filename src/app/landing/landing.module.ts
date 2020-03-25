import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LandingComponent, RegisterComponent, LoginComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
