import { UserService } from './shared/services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { User, Slain } from 'models';
import { AuthService } from './shared/services/auth.service';
import { DataService } from './shared/services/data.service';
import { LoginMode } from './auth/login-popup/login-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loginMode: LoginMode;
  public loading = true;
  public user: User;
  public slain: Slain;
  private updatedLastSignIn = false;
  //public lastLogin: Number;

  constructor(public authService: AuthService, public userService: UserService, private dataService: DataService) {}

  ngOnInit() {
    AOS.init();

    this.authService.user.subscribe(user => {
      this.loading = false;
      this.user = user;

      if (!this.updatedLastSignIn && this.user) {
        this.updatedLastSignIn = true;
        //this.lastLogin = this.user.lastSignInDate;

        //console.log('lastLogon', this.user.role);

        this.dataService.updateUserLastSignIn(this.user).subscribe();
        this.userService.user = this.user;
      }
    });

    this.authService.needLogin$.subscribe(loginMode => (this.loginMode = loginMode));
  }

  logOut() {
    this.authService.signOut();
  }
}
