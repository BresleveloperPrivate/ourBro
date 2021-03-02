import { SignInService } from './../../shared/services/signIn.service';
import { MEMORIAL_YEAR } from 'src/app/shared/constants';
import { User } from 'models';
import { Component, Input } from '@angular/core';
import { finalize, take, last } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AuthService, AuthErrors } from '../../shared/services/auth.service';
import { RegistrationForm } from '../registration-form/registration-form.types';
import { LoginForm } from '../login-form/login-form.types';
import { ForgotPasswordForm } from '../forgot-password-form/forgot-password-form.types';
//import { lastLogin } from '../../app.component'
export type LoginMode = 'Login' | 'Register' | 'Forgot';
//export type LoginKind='Host'|'Participate'|'Tell';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent {
  @Input() mode: LoginMode = 'Login';
  @Input() user: User;
  loading: boolean;
  lastdate = this.signInService.lastLogin;
  public yearDate: Date


  constructor(public authService: AuthService,
    public signInService: SignInService,
    private toastr: ToastrService) { }

  signInWithEmailAndPassword(form: LoginForm) {
    this.loading = true;
    this.authService
      .signInWithEmailAndPassword(form.email, form.password)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => this.loginSuccessSignIn(),
        error => {
          const { code } = error;
          if (code === AuthErrors.UserNotFound || code === AuthErrors.WrongPassword) {
            this.toastr.error('אימייל או סיסמא לא נכונים.');
          } else {
            this.handleError();
          }
        }
      );
  }

  signInWithFacebook() {
    this.loading = true;
    this.authService
      .signInWithFacebook()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => this.loginSuccessSignIn(),
        error => {
          if (error.code !== AuthErrors.CancelledPopupRequest) {
            this.handleError();
          }
        }
      );
  }

  signInWithGoogle() {
    this.loading = true;
    this.authService
      .signInWithGoogle()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => this.loginSuccessSignIn(),
        error => {
          if (error.code !== AuthErrors.CancelledPopupRequest) {
            this.handleError();
          }
        }
      );
  }

  createUserWithEmailAndPassword(form: RegistrationForm) {
    this.loading = true;
    this.authService
      .createUserWithEmailAndPassword(form.email, form.password)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => this.loginSuccessRegister(),
        error => {
          if (error.code === AuthErrors.EmailAlreadyInUse) {
            this.toastr.warning('כתובת האימייל הזו נמצאת כבר בשימוש.');
          } else {
            this.handleError();
          }
        }
      );
  }

  resetPassword(form: ForgotPasswordForm) {
    this.loading = true;
    this.authService
      .sendPasswordResetEmail(form.email)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.toastr.success('נשלח בהצלחה מייל לאיפוס סיסמא.');
        })
      )
      .subscribe();
  }

  private handleError() {
    this.toastr.error('אירעה שגיאה, אנא נסה שנית.');
  }
  // צריך טיפול בהתחברות לפי סוג ולפי תאריך
  // הפונקציה לא גמורה ומצריכה טיפול
  private loginSuccessSignIn() {
    this.authService.user.pipe(take(1)).subscribe(() => {
      this.yearDate = new Date(this.lastdate)
      if ((this.yearDate).getFullYear() < MEMORIAL_YEAR) {
        this.authService.closeLoginRegister()
        this.toastr.success(`התחברת בהצלחה!`);


      }

      // }
      else {
        this.authService.closeLogin()
      }
    });
  }

  private loginSuccessRegister() {
    this.authService.user.pipe(take(1)).subscribe(() => {
      this.authService.closeLoginRegister();
      this.toastr.success(`התחברת בהצלחה!`);
    });
  }
}
