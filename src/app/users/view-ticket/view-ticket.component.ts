import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/_model/reimbursement';
import { ReimbursementService } from 'src/app/_services/reimbursement.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  tickets: Reimbursement[];

  constructor(
    private reimbService: ReimbursementService,
    private auth: AuthenticationService
  ) {
    reimbService.getReimbursementsByUser(auth.currentUserValue).subscribe(data => this.tickets = data as Reimbursement[]);
  }

  ngOnInit(): void {
  }

  openModal(event) {
    document.getElementById('picModalImg').setAttribute('src', event.target.src);
    document.getElementById('picModal').style.display = 'block';
  }

  closeModal() {
    document.getElementById('picModal').style.display = 'none';
  }
}
