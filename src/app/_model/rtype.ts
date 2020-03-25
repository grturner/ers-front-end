import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Rtype {
    id: number;
    type: string;

    constructor(id: number, type: string) {
        this.id = id;
        this.type = type;
    }
}

@Injectable({
    providedIn: 'root'
})
export class RtypeAdapter implements Adapter<Rtype> {
    adapt(item: any): Rtype {
        return new Rtype(item.id, item.type);
    }
}