import { User } from '../../../../../types/models/index';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User;
}
