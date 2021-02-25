import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input('title') title: string;

  @Input('expended') expended: boolean = false;

  public isExpended: boolean;

  public e() {
    this.isExpended = !this.isExpended;
  }
}
