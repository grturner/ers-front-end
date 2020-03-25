import { User, UserAdapter } from './user';
import { Rstatus, RstatusAdapter } from './rstatus';
import { Rtype, RtypeAdapter } from './rtype';
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Reimbursement {
    id: number;
    amount: number;
    timeSubmitted: string;
    timeResolved: string;
    description: string;
    receipt: string;
    submitter: User;
    resolver: User;
    status: Rstatus;
    type: Rtype;
}

@Injectable({
    providedIn: 'root'
})
export class ReimbursementAdapter implements Adapter<Reimbursement> {
    constructor(
        private userAdapter: UserAdapter,
        private rtypeAdapter: RtypeAdapter,
        private rstatusAdapter: RstatusAdapter
    ) {}

    adapt(item: any): Reimbursement {
        const reimb = new Reimbursement();
        reimb.id = item.id;
        reimb.amount = item.amount;
        reimb.timeSubmitted = item.timeSubmitted;
        reimb.timeResolved = item.timeResolved;
        reimb.description = item.description;
        reimb.receipt = item.receipt;
        reimb.submitter = this.userAdapter.adapt(item.submitter);
        if (item.resolver != null) {
          reimb.resolver = this.userAdapter.adapt(item.resolver);
        } else {
          reimb.resolver = null;
        }
        reimb.status = this.rstatusAdapter.adapt(item.status);
        reimb.type = this.rtypeAdapter.adapt(item.type);
        return reimb;
    }
}
