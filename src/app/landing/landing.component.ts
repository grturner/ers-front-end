import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  constructor(
    private auth: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
        // redirect to '/users'
        if (this.auth.currentUserValue) {
          this.router.navigate(['/users']).then();
        } else {
          this.router.navigate(['/landing/login']).then();
        }
   }
}
