import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MeetingParticipate, User, Meeting } from 'models';

@Component({
  selector: 'app-meeting-participates-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './map-meeting-participates-list.component.html',
  styleUrls: ['./map-meeting-participates-list.component.scss']
})
export class MeetingParticipatesListComponent {
  @Input() user: User;
  @Input() meeting: Meeting;
  @Input() meetingParticipates: MeetingParticipate[];
}
