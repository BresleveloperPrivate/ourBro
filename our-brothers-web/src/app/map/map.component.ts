// import { Component, OnInit } from '@angular/core';
// import { Meeting, User } from 'models';
// import { DataService } from '../shared/services/data.service';
// import { ToastrService } from 'ngx-toastr';
// import { Router } from '@angular/router';
// import { MEMORIAL_YEAR } from '../shared/constants';

// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.scss']
// })
// export class MapComponent implements OnInit {
//   user: User;
//   meetings: Meeting[];
//   mapShowGuide = false;
//   year = MEMORIAL_YEAR;

//   constructor(private router: Router, private dataService: DataService, private toastr: ToastrService) {}

//   ngOnInit(): void {}

//   onMapGuideCompleted() {
//     this.mapShowGuide = true;
//     if (this.user && this.user.id) {
//       this.dataService.updateUserMapGuideLastVisit(this.user.id);
//     }
//   }

//   onJoinMeeting(meeting: Meeting) {
//     if (meeting && this.user) {
//       if (window.confirm('האם ברצונך להשתבץ למפגש?')) {
//         (this.user.role === 'bereaved'
//           ? this.dataService.bereavedJoinMeeting(this.user, meeting)
//           : this.dataService.participateJoinMeeting(this.user, meeting, this.getAccompanies())
//         ).subscribe(
//           () => {
//             this.toastr.success('שובצת בהצלחה');
//             this.router.navigate([`meetings/${this.year}/${meeting.hostId}/${meeting.id}`]);
//           },
//           () => {
//             this.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר');
//           }
//         );
//       }
//     }
//   }

//   getAccompanies(): number {
//     let accompaniesAnswer = window.prompt('האם יגיעו איתך אנשים נוספים?', '0');

//     let number = Number.parseInt(accompaniesAnswer);

//     while (!(!Number.isNaN(number) && number >= 0 && number <= 7)) {
//       accompaniesAnswer = window.prompt('נא להזין מספר משתתפים בין 0 ל-7', '0');
//       number = Number.parseInt(accompaniesAnswer);
//     }

//     return number;
//   }
// }
