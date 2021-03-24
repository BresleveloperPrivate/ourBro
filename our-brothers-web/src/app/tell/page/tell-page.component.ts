//import { EnrollmentService } from './../../shared/services/enrollment.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, combineLatest, Subscription } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Meeting, User, BereavedProfile, Slain, UserRole, BereavedGuidance } from 'models';
import { MEMORIAL_YEAR } from '../../shared/constants';
import { AuthService } from '../../shared/services/auth.service';
import { DataService } from '../../shared/services/data.service';
import { ParticipationsService } from '../../shared/services/participations.service';
import { SlainForm } from '../slain-form/slain-form.component';
import { BereavedProfileForm } from '../bereaved-profile-form/bereaved-profile-form.component';
import { ProgressComponent } from '../../shared/components/progress/progress.component';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-tell-page',
  templateUrl: './tell-page.component.html',
  styleUrls: ['./tell-page.component.scss']
})
export class TellPageComponent implements OnInit, OnDestroy {
  public slain: Slain;
  public user: User;
  //public firebaseSlain:firebase.Slain;
  public firebaseUser: firebase.User;
  public meetings: Meeting[];
  public currentStep: number = 0;
  public currentStep$ = new Subject<number>();
  public year = MEMORIAL_YEAR;
  public profile: boolean = false;
  //public ok: boolean = false;
  //public scheduling: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(
    // public enrollmentService: EnrollmentService,
    private router: Router,
    private authService: AuthService,
    private participationsService: ParticipationsService,
    private toastr: ToastrService,
    private _userService: UserService,

    private dataService: DataService
  ) {}

  ngOnInit() {
    this.authService.firebaseUser.subscribe(firebaseUser => (this.firebaseUser = firebaseUser));

    this.subscriptions.push(
      combineLatest(
        this.authService.user,
        this.currentStep$.pipe(
          distinctUntilChanged(),
          tap(() => {
            if (window.scrollTo) {
              window.scrollTo(0, 0);
            }
          })
        )
      ).subscribe(([user, currentStep]) => {
        console.log('tel page firebase subscribe user ', user);

        this.user = user;
        console.log('TellPageComponent firebase cb', user);

        this._userService.setFirebaseTellUser(user);
        this.currentStep = currentStep;

        // Auto navigations after the first step
        if (currentStep > 0) {
          if (user) {
            if (user.role && user.role !== UserRole.bereaved && !user.isAdmin) {
              this.router.navigate(['/home']);
            } else if (user.role !== UserRole.bereaved) {
              this.dataService.setUserRole(user, UserRole.bereaved);
            }
          }

          if (!user) {
            this.currentStep$.next(1);
            this.authService.requestToLogin();
          } else if (!this.participationsService.isBereavedHaveProfileDetails(user)) {
            this.currentStep$.next(2);
          } else if (!this.participationsService.isBereavedHaveSlainDetails(user)) {
            this.currentStep$.next(3);
          } else if (!this.participationsService.isBereavedAnsweredTrainingMeeting(user)) {
            this.currentStep$.next(4);
          } else {
            this.currentStep$.next(5);
          }
        }
      })
    );

    this.subscriptions.push(
      this.dataService.getMeetings().subscribe(meetings => {
        this.meetings = meetings;
      })
    );

    setTimeout(() => {
      this.currentStep$.next(1);
    });
  }

  onProfileSubmit(profileForm: BereavedProfileForm) {
    this.dataService.setUserProfile(this.user, profileForm);
    //this.slain=slain;
    //this.expended = true;
    //this.a=false;
  }

  // public onSubmit() {
  
  // }
  onSlainsSubmit(slainForm: SlainForm) {
    const slains: Slain[] = [
      {
        firstName: slainForm.firstName,
        lastName: slainForm.lastName,
        deathDate: slainForm.deathDate
      }
    ];

    const story = slainForm.story;

    const bereavedProfile: BereavedProfile = {
      slains,
      story
    };
    alert('הפרטים נשמרו בהצלחה אפשר להמשיך להשתבץ למפגש');
    // console.log('slain בדיקה');

    this.dataService.setBereavedProfile(this.user, bereavedProfile);

    //this.ok = true;
  }

  onGuidanceSubmit(bereavedGuidance: BereavedGuidance) {
    this.dataService.setBereavedGuidance(this.user, bereavedGuidance);
    //this.scheduling = true;
  }

  onJoinMeeting(meeting: Meeting) {
    if (window.confirm('האם ברצונך להשתבץ למפגש?')) {
      if (this.user.role === UserRole.bereaved) {
        this.dataService.bereavedJoinMeeting(this.user, meeting).subscribe(
          () => {
            this.toastr.success('שובצת בהצלחה!');
            this.router.navigate([`meetings/${this.year}/${meeting.hostId}/${meeting.id}`]);
          },
          () => {
            this.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר.');
          }
        );
      }
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
