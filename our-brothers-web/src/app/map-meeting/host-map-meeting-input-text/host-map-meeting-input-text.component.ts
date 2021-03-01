import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-host-map-meeting-input-text',
  templateUrl: './host-map-meeting-input-text.component.html',
  styleUrls: ['./host-map-meeting-input-text.component.scss']
})
export class HostMapMeetingInputTextComponent {
  @Input() iconUrl: string;
  @Input() label: string;
  @Input() text: string;
  @Input() info: string;
}
