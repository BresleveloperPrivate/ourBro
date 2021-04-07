import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { User } from 'models';

@Component({
  selector: 'app-users-list-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users-list-row.component.html',
  styleUrls: ['./users-list-row.component.scss']
})
export class UsersListRowComponent {
  @Input() currentUser: User;
  @Input() user: User;
  @Output() userPhone = new EventEmitter<string>();
  @Output() userEmail = new EventEmitter<string>();

  @Output() userBirthDate = new EventEmitter<number>();
  @Output() deleting = new EventEmitter<void>();
  @Output() volunteering = new EventEmitter<boolean>();
  public d = new Date().getTime();
  expanded = false;
  public normalDAte;

  ngOnInit(): void {
    this.normalDAte = new Date(this.user.lastSignInDate).toISOString().split('T')[0];

  }
}
