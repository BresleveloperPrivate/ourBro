import { UpdateUserBirthDate } from './../../../shared/services/data.service';
import { Component, OnInit, OnDestroy, Renderer2, Inject } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { User, Meeting } from 'models';
import { UtilsService } from '../../../shared/services/utils.service';
import { DataService, VolunteeringUser, UpdateUserPhone, UpdateUserEmail } from '../../../shared/services/data.service';
import { AuthService } from '../../../shared/services/auth.service';
import { HttpService } from '../../../shared/services/http.service';
import { MEMORIAL_YEAR } from 'src/app/shared/constants';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.scss']
})
export class AdminUsersPageComponent implements OnInit, OnDestroy {
  currentUser: User;
  users: User[];
  filter: string = '';
  only2021: boolean
  year = MEMORIAL_YEAR;

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
    private utilsService: UtilsService,
    public renderer2: Renderer2,
    @Inject(DOCUMENT) private _document,
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



    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://cdn.jsdelivr.net/npm/excellentexport@3.4.3/dist/excellentexport.min.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }
  userPhone({ user, phone }: UpdateUserPhone) {
    if (user) {
      this.dataService.setBereavedPhone(user, phone);
    }
  }

  userEmail({ user, email }: UpdateUserEmail) {
    if (user) {
      this.dataService.setBereavedEmail(user, email);
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


  hostToExcel() {
    //let data = this.bereaveds;
    // console.log('hooooo excel ');

    this.only2021 = true;
    let MasterArr = [
      ['first name', 'last name', 'phone', 'email', ' last enter', 'address']
    ];
    for (let i = 0; i < this.usersfilter.length; i++) {

      let h = this.usersfilter[i];

      if (this.only2021 && this.only2021 === true) {
        if (!h.lastSignInDate || h.lastSignInDate < 1609459200000) {
          continue;
        }
      }
      let a = [];
      if (h.profile && h.role && h.role === 'host') {



        a.push(h.profile.firstName);
        a.push(h.profile.lastName);
        a.push(h.profile.phoneNumber);
        a.push(h.profile.email);
        a.push(new Date(h.lastSignInDate));
        if (h?.hostParticipation && h.hostParticipation[this.year]) {
          //let z = h.hostParticipation[this.year].meetings?.length;
          let z = Object.values(h.hostParticipation[this.year].meetings);

          //let e = JSON.stringify(h.hostParticipation);
          let e = '';
          console.log('hostParticipation', e);

          for (let j = 0; j < z.length; j++) {
            if (z[j].title)
              e = e + (z[j].title) + ', ';

          }
          a.push(e)

        }
        else {
          a.push('-')
        }
        MasterArr.push(a);
      }
    }
    let options = {
      anchor: document.querySelector('#bbb'),
      format: 'xlsx',
      filename: 'users-noy.xlsx'
    };

    //console.log(MasterArr);
    let sheet = {
      //name: 'Sheet 1', // Sheet name
      name: 'users-noy.xlsx',
      from: {
        //table: String/Element, // Table ID or table element
        array: MasterArr // Array with data
        //arrayHasHeader: true, // Array first row is the header // not in use
        //removeColumns: [...], // Array of column indexes (from 0)
        //filterRowFn: function(row) {return true} // Return true to keep
      }
    };

    /*
     */

    window['ExcellentExport'].convert(options, [sheet], true);
    //ExcellentExport.convert(options, [sheet], true);




  }
}
