import { NgModule } from '@angular/core';
import { HostTryInputTextComponent } from './host-try-input-text/host-try-input-text.component';
import { MeetingParticipatesListComponent } from './try-participates-list/try-participates-list.component';
import { PipesModule } from '../shared/pipes/pipes.module';
import { CommonModule } from '@angular/common';

const api = [
  HostTryInputTextComponent,
  MeetingParticipatesListComponent];

@NgModule({
  declarations: api,
  imports: [PipesModule, CommonModule],
  exports: api
})
export class TryModule { }
