import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-host-try-input-text',
  templateUrl: './host-try-input-text.component.html',
  styleUrls: ['./host-try-input-text.component.scss']
})
export class HostTryInputTextComponent {
  @Input() iconUrl: string;
  @Input() label: string;
  @Input() text: string;
  @Input() info: string;
}
