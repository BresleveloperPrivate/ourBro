import { NgModule } from '@angular/core';
import { HostMapMeetingInputTextComponent } from './host-map-meeting-input-text/host-map-meeting-input-text.component';
import { MeetingParticipatesListComponent } from './map-meeting-participates-list/map-meeting-participates-list.component';
import { PipesModule } from '../shared/pipes/pipes.module';
import { CommonModule } from '@angular/common';

const api = [
  HostMapMeetingInputTextComponent,
  MeetingParticipatesListComponent];

@NgModule({
  declarations: api,
  imports: [PipesModule, CommonModule],
  exports: api
})
export class MapMeetingModule { }
