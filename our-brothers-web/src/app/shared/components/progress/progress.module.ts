import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProgressComponent],
  exports: [ProgressComponent],
  imports: [CommonModule]
})
export class ProgressModule {}
