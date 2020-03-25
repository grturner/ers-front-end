import { Component, OnInit, PipeTransform } from '@angular/core';
import { Reimbursement } from 'src/app/_model/reimbursement';
import { Rstatus } from 'src/app/_model/rstatus';
import { ReimbursementService } from 'src/app/_services/reimbursement.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { RstatusService } from 'src/app/_services/rstatus.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  //tickets: Reimbursement[];
  //display: Reimbursement[];
  display: Observable<Reimbursement[]>;
  rStatus: Rstatus[];
  form: FormGroup;

  constructor(
    private reimbService: ReimbursementService,
    private auth: AuthenticationService,
    private rstatusService: RstatusService,
    private formBuilder: FormBuilder
    ) {
    this.display = reimbService.getAllReimbursements()
    rstatusService.getAllStatus().subscribe(data => this.rStatus = data as Rstatus[]);
    this.form = this.formBuilder.group({selected: ''});
  }

  ngOnInit(): void {
  }
  
  get f() { return this.form.controls }

  //onChange(s) {
  //  if (s.target.value == "All") {
  //    this.display = this.tickets;
  //  } else {
  //    this.display = this.tickets.filter(x => x.status.status == this.f.selected.value.status);
  //  }
  //}

  onChange(event) {
    if (event.target.value == "All") {
      this.display = this.reimbService.getAllReimbursements();
    } else {
      this.display = this.reimbService.getByStatus(this.f.selected.value.status);
    }
  }

  update(ticket: Reimbursement, status: number) {
    ticket.resolver = this.auth.currentUserValue;
    // TODO set updated status
    if (status === 1) {
      ticket.status = this.rStatus.find(x => x.status === 'Approved');
    } else {
      ticket.status = this.rStatus.find(x => x.status === 'Denied');
    }
    this.reimbService.updateReimbursement(ticket);
  }

  openModal(event) {
    document.getElementById('picModalImg').setAttribute('src', event.target.src);
    document.getElementById('picModal').style.display = 'block';
  }

  closeModal() {
    document.getElementById('picModal').style.display = 'none';
  }
}
