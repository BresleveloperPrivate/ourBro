//import { EnrollmentService } from './../../services/enrollment.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input('title') title: string;
  @Input('expended') expended: boolean = false;


  // constructor(public enrollmentService :EnrollmentService ,) { }
  //@Input('open') open: boolean = false;

  @Input('isExpended') isExpended = true;

  public e() {
    this.isExpended = !this.isExpended;
  }


  public onlyOne() {
    this.isExpended = !this.isExpended;
  }
}
