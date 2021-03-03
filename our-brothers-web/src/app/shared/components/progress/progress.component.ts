//import { EnrollmentService } from './../../services/enrollment.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input() title: string;
  @Input() expended: boolean = false;
  @Input() isExpended = false;

  //constructor(public enrollmentService: EnrollmentService) { }
  public e() {
    this.isExpended = !this.isExpended;
  }

  // public try() {
  //   this.enrollmentService.e(this.isExpended);
  // }
  // public onlyOne() {
  //   this.isExpended = !this.isExpended;
  // }
}
