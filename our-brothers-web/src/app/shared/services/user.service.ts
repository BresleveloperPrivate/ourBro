import { User } from '../../../../../types/models/index';

import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User;

  private fbuSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public firebaseTellUser: Observable<User> = this.fbuSubject.asObservable();

  public setFirebaseTellUser(u: User): void {
    console.log('UserService setFirebaseTellUser, calling next', u);
    this.fbuSubject.next(u);
  }

  constructor() {
    this.firebaseTellUser.subscribe(u => console.log('service test user sub', u));
  }
}
