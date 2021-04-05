import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BereavedStatus } from 'models';
import { BereavedStatusOption } from './select-bereaved-status.types';

@Component({
  selector: 'app-select-bereaved-status',
  templateUrl: './select-bereaved-status.component.html'
})
export class SelectBereavedStatusComponent {
  @Input() placeholder: string = 'סטטוס '

  @Input() value: BereavedStatus;
  @Output() valueChange = new EventEmitter<BereavedStatus>();

  @Input() readonly: boolean = false;

  options: BereavedStatusOption[] = [
    {
      value: BereavedStatus.done,
      label: 'הושלם'
    },
    {
      value: BereavedStatus.embed,
      label: 'שובץ'
    },
    {
      value: BereavedStatus.notEmbed,
      label: 'לא שובץ'
    },
    {
      value: BereavedStatus.waiting,
      label: 'מחכה לתשובה'
    },
    {
      value: BereavedStatus.hostNoConnect,
      label: 'מארח לא יצר קשר'
    },
    {
      value: BereavedStatus.hostingHimself,
      label: 'מארח את עצמו'
    },

    {
      value: BereavedStatus.notParticipate,
      label: 'לא רוצה להשתתף'
    },
    {
      value: BereavedStatus.other,
      label: 'אחר'
    },

  ];
}
