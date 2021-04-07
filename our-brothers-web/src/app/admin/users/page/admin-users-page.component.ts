import { UpdateUserBirthDate } from './../../../shared/services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { User, Meeting } from 'models';
import { UtilsService } from '../../../shared/services/utils.service';
import { DataService, VolunteeringUser, UpdateUserPhone } from '../../../shared/services/data.service';
import { AuthService } from '../../../shared/services/auth.service';
import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.scss']
})
export class AdminUsersPageComponent implements OnInit, OnDestroy {
  currentUser: User;
  users: User[];
  filter: string = '';
  filteredUsersIds: Set<string>;
  error = '';
  loading = true;

  usersfilter: User[];
  selectedMeeting$ = new Subject<Meeting>();
  selectingUser: User;

  private subscriptions: Subscription[] = [];

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private dataService: DataService,
    private httpService: HttpService,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.user.subscribe(currentUser => (this.currentUser = currentUser)),
      this.dataService.getUsers().subscribe(
        users => {
          this.loading = false;
          this.usersfilter = users.filter(i => i.role !== 'bereaved')
          this.users = this.usersfilter;

          this.filterUsers();
        },
        error => {
          this.loading = false;
          this.error = error.toString();
        }
      )
    );
  }
  userdPhone({ user, phone }: UpdateUserPhone) {
    if (user) {
      this.dataService.setBereavedPhone(user, phone);
    }
  }

  bereavedBirthDate({ user, birthDate }: UpdateUserBirthDate) {
    if (user) {
      this.dataService.setUserBirthDate(user, birthDate);
    }
  }
  filterUsers() {
    const filteredUsersIds = this.utilsService.filteringUsers(this.users, this.filter).map(({ id }) => id);
    this.filteredUsersIds = new Set(filteredUsersIds);
  }

  volunteering({ user, isVolunteer }: VolunteeringUser) {
    if (user) {
      if (
        window.confirm(
          'האם ברוצנך ' +
          (isVolunteer ? 'להגדיר' : 'להסיר') +
          ' את ' +
          user.profile.firstName +
          ' ' +
          user.profile.lastName +
          ' כמתנדב/ת?'
        )
      ) {
        this.dataService.setUserVolunteer(user, isVolunteer).subscribe(
          () => {
            this.toastr.success('המשתמש הוגדר כמתנדב בהצלחה.');
          },
          () => {
            this.toastr.error('שגיאה - לא ניתן להגדיר משתמש כמתנדב. נא ליצור קשר.');
          }
        );
      }
    }
  }

  deleting(user: User) {
    if (user) {
      if (window.confirm('האם ברצונך למחוק את ' + user.profile.firstName + ' ' + user.profile.lastName + '?')) {
        this.httpService.deleteUser(user).subscribe(
          () => {
            this.toastr.success('המשתמש נמחק בהצלחה.');
          },
          () => {
            this.toastr.error('שגיאה - לא ניתן למחוק משתמש. נא ליצור קשר.');
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
