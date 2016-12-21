import { Component, Input } from '@angular/core';

import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'content-component',
  template: `
              <div class="header" style="padding: 20px; margin: 20px; border: 1px solid black;">
                ContentComponent user is:
                {{ user | json }}
                <button (click)="handleClick()">Change Local User</button>
              </div>
            `
})
export class ContentComponent {

  private _user: UserModel;

  @Input()
  set user(val: UserModel) {
    this._user = val;
  }

  get user() {
    return this._user;
  }

  handleClick() {
    this.user.username = 'hello';
  }

}
