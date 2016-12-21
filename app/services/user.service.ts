import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {

  private _user: UserModel = new UserModel('username', 'email', 100);

  set user(val: UserModel) {
    this._user = val;
  }

  get user() {
    return this._user;
  }

  getUser(): Observable<UserModel> {
    return new Observable((observer: any) => {
      setTimeout(() => {
        observer.next(this.user);
      }, 4000);
    });
  }

}
