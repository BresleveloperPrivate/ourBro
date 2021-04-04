import { UserProfile } from './../../../../../../types/models/index';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { User, BereavedStatus, BereavedGuidance, Meeting, Address } from 'models';
import { MEMORIAL_YEAR } from '../../../shared/constants';
import { ParticipationsService } from '../../../shared/services/participations.service';

@Component({
  selector: 'app-bereaveds-list-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bereaveds-list-row.component.html',
  styleUrls: ['./bereaveds-list-row.component.scss']
})
export class BereavedsListRowComponent {
  @Input() currentUser: User;
  @Input() bereaved: User;
  @Output() joinBereved = new EventEmitter<void>();
  @Output() leaveBereaved = new EventEmitter<Meeting>();
  @Output() deleting = new EventEmitter<void>();
  @Output() volunteering = new EventEmitter<boolean>();
  @Output() bereavedStatus = new EventEmitter<BereavedStatus>();
  @Output() bereavedGuidance = new EventEmitter<BereavedGuidance>();
  //@Output() bereavedlang=new EventEmitter<UserProfile>();
  @Output() bereavedBirthDate = new EventEmitter<number>();
  @Output() bereavedNotes = new EventEmitter<string>();
  @Output() bereavedEmail = new EventEmitter<string>();
  @Output() bereavedStory = new EventEmitter<string>();
  @Output() bereavedNamel = new EventEmitter<string>();
  @Output() bereavedNamef = new EventEmitter<string>();
  @Output() bereavedSlainl = new EventEmitter<string>();
  @Output() bereavedSlainf = new EventEmitter<string>();
  @Output() bereavedSlainDate = new EventEmitter<string>();
  @Output() bereavedPhone = new EventEmitter<number>();
  @Output() bereavedAddress = new EventEmitter<Address>();
  @Output() bereavedVolunteer = new EventEmitter<void>();
  @Output() removeVolunteer = new EventEmitter<void>();
  public normalDAte;
  // public sigh = 1917537397938;
  //
  public sigh;

  ngOnInit(): void {
    this.normalDAte = new Date(this.bereaved.lastSignInDate).toISOString().split('T')[0];
    this.sigh = this.currentUser?.registered;
    let t = this.currentUser?.registered;

    console.log('dddddd', this.d);
    console.log('ssssss', (this.sigh));
    console.log('ttttttt', t);

  }
  public d = new Date().getTime();
  expanded = false;
  year = MEMORIAL_YEAR;

  constructor(public participationsService: ParticipationsService) {



  }

  // selectAll()
  // {

  // }


}


