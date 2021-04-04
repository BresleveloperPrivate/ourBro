
import { Component, OnInit, OnDestroy, Renderer2, Inject } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { User, Meeting } from 'models';
import { MEMORIAL_YEAR } from '../../../shared/constants';
import { AuthService } from '../../../shared/services/auth.service';
import {
  DataService,
  UserMeeting,
  VolunteeringUser,
  UpdateBereavedStatus,
  UpdateBereavedGuidance,
  UpdateBereavedNotes,
  UpdateBereavedEmail,
  // UpdateBereavedName,
  UpdateBereavedSlainl,
  UpdateBereavedSlainf,
  UpdateBereavedSlainDate,
  UpdateBereavedPhone,
  UpdateUserAddress,
  UpdateUserBirthDate,
  BereavedVolunteer
} from '../../../shared/services/data.service';
import { UtilsService } from '../../../shared/services/utils.service';
import { HttpService } from '../../../shared/services/http.service';
import { DOCUMENT } from '@angular/common';

import { SeniorityPipe } from '../../../shared/pipes/seniority.pipe';

@Component({
  selector: 'app-admin-bereaveds-page',
  templateUrl: './admin-bereaveds-page.component.html',
  styleUrls: ['./admin-bereaveds-page.component.scss'],
  providers: [SeniorityPipe]
})
export class AdminBereavedsPageComponent implements OnInit, OnDestroy {
  currentUser: User;
  bereaveds: User[];
  noBerevedMeetings: Meeting[];
  filter: string = '';
  filteredBereavedsIds: Set<string>;
  year = MEMORIAL_YEAR;
  error = '';
  loading = true;

  selectedMeeting$ = new Subject<Meeting>();
  selectingBereaved: User;

  private subscriptions: Subscription[] = [];
  only2021: boolean
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private dataService: DataService,
    private httpService: HttpService,
    private utilsService: UtilsService,

    public renderer2: Renderer2,
    @Inject(DOCUMENT) private _document,
    private agePipe: SeniorityPipe
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.user.subscribe(currentUser => {
        this.currentUser = currentUser;
      }),
      this.dataService.getBereaveds().subscribe(
        bereaveds => {
          this.loading = false;
          this.bereaveds = bereaveds;
          this.filterBereaveds();
        },
        error => {
          this.loading = false;
          this.error = error.toString();
        }
      ),
      this.dataService.getNoBerevedMeetings().subscribe(noBerevedMeetings => {
        this.noBerevedMeetings = noBerevedMeetings;
      })
    );

    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://cdn.jsdelivr.net/npm/excellentexport@3.4.3/dist/excellentexport.min.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }

  filterBereaveds() {
    const filteredBereavedsIds = this.utilsService.filteringBereaveds(this.bereaveds, this.filter).map(({ id }) => id);
    this.filteredBereavedsIds = new Set(filteredBereavedsIds);
  }

  joinBereved(bereaved: User) {
    console.log('vbhnjkm,l', bereaved);

    this.selectingBereaved = bereaved;
    if (this.noBerevedMeetings && this.noBerevedMeetings.length) {
      this.selectedMeeting$.pipe(take(1)).subscribe(meeting => {
        this.selectingBereaved = null;
        if (meeting) {
          this.dataService.bereavedJoinMeeting(bereaved, meeting).subscribe(
            () => {
              this.toastr.success('האח/ות שובץ בהצלחה');
            },
            () => {
              this.toastr.error('שגיאה - לא ניתן לשבץ למפגש. נא ליצור קשר.');
            }
          );
        }
      });
    } else {
      this.selectingBereaved = null;
    }
  }

  leaveBereaved({ user, meeting }: UserMeeting) {
    if (user && meeting) {
      if (
        window.confirm(
          'האם ברצונך להסיר את ' +
          user.profile.firstName +
          ' ' +
          user.profile.lastName +
          ' מהמפגש ' +
          meeting.title +
          '?'
        )
      ) {
        this.dataService.bereavedLeaveMeeting(user, meeting).subscribe(
          () => {
            this.toastr.success('המשתמש הוסר בהצלחה.');
          },
          () => {
            this.toastr.error('שגיאה - לא ניתן להסיר משתמש. נא ליצור קשר.');
          }
        );
      }
    }
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

  bereavedStatus({ bereaved, status }: UpdateBereavedStatus) {
    if (bereaved) {
      this.dataService.setBereavedStatus(bereaved, status);
    }
  }

  bereavedGuidance({ bereaved, guidance }: UpdateBereavedGuidance) {
    if (bereaved) {
      this.dataService.setBereavedGuidance(bereaved, guidance);
    }
  }

  bereavedBirthDate({ user, birthDate }: UpdateUserBirthDate) {
    if (user) {
      this.dataService.setUserBirthDate(user, birthDate);
    }
  }

  bereavedNotes({ bereaved, notes }: UpdateBereavedNotes) {
    if (bereaved) {
      this.dataService.setBereavedNotes(bereaved, notes);
    }
  }

  bereavedEmail({ bereaved, email }: UpdateBereavedEmail) {
    if (bereaved) {
      this.dataService.setBereavedEmail(bereaved, email);
    }
  }
  bereavedPhone({ bereaved, phone }: UpdateBereavedPhone) {
    if (bereaved) {
      this.dataService.setBereavedPhone(bereaved, phone);
    }
  }

  // bereavedName({ bereaved, firstName ,lastName }: UpdateBereavedName) {
  //   if (bereaved) {
  //     this.dataService.setBereavedPhone(bereaved, firstName,lastName);
  //   }
  // }
  bereavedSlainl({ bereaved, slainLastName }: UpdateBereavedSlainl) {
    if (bereaved) {
      this.dataService.setBereavedSlainl(bereaved, slainLastName);
    }
  }
  bereavedSlainf({ bereaved, slainFirstName }: UpdateBereavedSlainf) {
    if (bereaved) {
      this.dataService.setBereavedSlainf(bereaved, slainFirstName);
    }
  }

  bereavedSlainDate({ bereaved, bereavedSlainDate }: UpdateBereavedSlainDate) {
    if (bereaved) {
      this.dataService.setBereavedSlainDate(bereaved, bereavedSlainDate);
    }
  }




  bereavedAddress({ user, address }: UpdateUserAddress) {
    if (user) {
      this.dataService.setUserAddress(user, address);
    }
  }

  bereavedVolunteer({ user, bereaved }: BereavedVolunteer) {
    if (user) {
      this.dataService.bereavedVolunteer(user, bereaved);
    }
  }

  removeVolunteer(bereaved: User) {
    if (bereaved) {
      this.dataService.removeVolunteer(bereaved);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  usersToExcel() {
    //let data = this.bereaveds;

    let MasterArr = [
      ['first name', 'last name', 'phone', 'email', 'lastSignInDate', 'city', 'yearsLost', 'age', 'languages', 'fallenDetails', 'myStory']
    ];
    for (let i = 0; i < this.bereaveds.length; i++) {
      let b = this.bereaveds[i];

      if (this.only2021 && this.only2021 === true) {
        if (!b.lastSignInDate || b.lastSignInDate < 1609459200000) {

          continue;
        }
      }


      let a = [];
      if (b.profile) {
        a.push(b.profile.firstName);
        a.push(b.profile.lastName);
        a.push(b.profile.phoneNumber);
        a.push(b.profile.email);
        // a.push(new Date(b.lastSignInDate).toISOString().split('T')[0]);
        a.push(b.profile.address && b.profile.address.formattedAddress ? b.profile.address.formattedAddress : '');

        if (b.bereavedProfile && b.bereavedProfile.slains) {
          let sls = b.bereavedProfile.slains;
          let ax = [...a];

          for (let x = 0; x < sls.length; x++) {
            const sx = sls[x];
            ax.push(this.agePipe.transform(sx.deathDate));
            ax.push(this.agePipe.transform(b.profile.birthDay));
            ax.push(b.profile.otherLang ? b.profile.otherLang : '');
            let sDetails = sx.firstName + ' ' + sx.lastName + ' ז"ל' + '  ---  ' + this.agePipe.transform(sx.deathDate);
            ax.push(sDetails);
            ax.push(b.bereavedProfile && b.bereavedProfile.story ? b.bereavedProfile.story : '');

            MasterArr.push(ax);
          }
        } else {
          a.push('');
          a.push('');
          a.push('');
          a.push('');
          a.push('');
        }
      }
    }

    let options = {
      anchor: document.querySelector('#excelALL'),
      format: 'xlsx',
      filename: 'users-noy.xlsx'
    };

    console.log(MasterArr);
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



  barevedToExcel() {
    //let data = this.bereaveds;
    this.only2021 = true;
    let MasterArr = [
      ['first name', 'last name', 'phone', 'email', 'city', 'yearsLost', 'age', 'languages', 'fallenDetails', 'myStory']
    ];
    for (let i = 0; i < this.bereaveds.length; i++) {
      let b = this.bereaveds[i];

      if (this.only2021 && this.only2021 === true) {
        if (!b.lastSignInDate || b.lastSignInDate < 1609459200000) {

          continue;
        }
      }


      let a = [];
      if (b.profile) {
        a.push(b.profile.firstName);
        a.push(b.profile.lastName);
        a.push(b.profile.phoneNumber);
        a.push(b.profile.email);
        a.push(b.profile.address && b.profile.address.formattedAddress ? b.profile.address.formattedAddress : '');

        if (b.bereavedProfile && b.bereavedProfile.slains) {
          let sls = b.bereavedProfile.slains;
          let ax = [...a];

          for (let x = 0; x < sls.length; x++) {
            const sx = sls[x];
            ax.push(this.agePipe.transform(sx.deathDate));
            ax.push(this.agePipe.transform(b.profile.birthDay));
            ax.push(b.profile.otherLang ? b.profile.otherLang : '');
            let sDetails = sx.firstName + ' ' + sx.lastName + ' ז"ל' + '  ---  ' + this.agePipe.transform(sx.deathDate);
            ax.push(sDetails);
            ax.push(b.bereavedProfile && b.bereavedProfile.story ? b.bereavedProfile.story : '');

            MasterArr.push(ax);
          }
        } else {
          a.push('');
          a.push('');
          a.push('');
          a.push('');
          a.push('');
        }
      }
    }

    let options = {
      anchor: document.querySelector('#excel'),
      format: 'xlsx',
      filename: 'users-noy.xlsx'
    };

    console.log(MasterArr);
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
