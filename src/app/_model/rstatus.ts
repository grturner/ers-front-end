import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Rstatus {
    id: number;
    status: string;

    constructor(id: number, status: string) {
        this.id = id;
        this.status = status;
    }
}

@Injectable({
    providedIn: 'root'
})
export class RstatusAdapter implements Adapter<Rstatus> {
    adapt(item: any): Rstatus {
        return new Rstatus(item.id, item.status);
    }
}
