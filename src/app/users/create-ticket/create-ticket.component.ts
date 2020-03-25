import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RtypeService } from 'src/app/_services/rtype.service';
import { ReimbursementService } from 'src/app/_services/reimbursement.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Rtype } from 'src/app/_model/rtype';
import { Reimbursement } from 'src/app/_model/reimbursement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  createReimbForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  types: Rtype[];
  preview: string;
  

  constructor(
    private formBuilder: FormBuilder,
    private rtypeService: RtypeService,
    private reimbService: ReimbursementService,
    private auth: AuthenticationService,
    private router: Router
  ) {
    this.createReimbForm = this.formBuilder.group({
      type: '',
      amount: '',
      description: '',
      receipt: [null],
    });
    rtypeService.getAllTypes().subscribe(data => {
      this.types = data as Rtype[]; });
  }

  ngOnInit(): void {
  }

  get f() { return this.createReimbForm.controls; }

  fileUpload(event) {
    const file = (event.target as HTMLInputElement).files[0];
 
    //preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  onSubmit(reimbInfo) {
    const reimb = new Reimbursement();
    reimb.type = this.f.type.value;
    reimb.amount = this.f.amount.value;
    if (this.preview !== null) {
      reimb.receipt = this.preview;
    }
    reimb.description = this.f.description.value;
    reimb.submitter = this.auth.currentUserValue;
    this.reimbService.createReimbursement(reimb).subscribe(req => this.router.navigate(['/users/view-ticket']).then());
  }
}
