import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class User {
    userId: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    roleType: string;
    
    constructor() {
        this.userId = 0;
        this.roleType = 'User';
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserAdapter implements Adapter<User> {
    adapt(item: any): User {
        const user = new User();
        user.userId = item.userId;
        user.userName = item.userName;
        user.password = item.password;
        user.firstName = item.firstName;
        user.lastName = item.lastName;
        user.email = item.email;
        user.roleType = item.roleType;
        return user;
    }
}
