import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MapMeetingPageComponent } from './map-meeting-page.component';
import { ParticipationsButtonsModule } from '../../shared/components/participations-buttons/participations-buttons.module';
import { MeetingsComponentsModule } from '../../shared/components/meetings/meetings-components.module';
import {MapMeetingDetailsPageComponent } from '../details-page/map-meeting-details-page.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { MapMeetingModule } from '../map-meeting.module';
import { RemoveButtonModule } from '../../shared/components/remove-button/remove-button.module';
import { MeetingJoinButtonModule } from '../../shared/components/meeting-join-button/meeting-join-button.module';

const routes = [
  {
    path: '',
    component: MapMeetingPageComponent
  },
  {
    path: ':memorialYear/:hostId/:meetingId',
    component: MapMeetingDetailsPageComponent
  }
];

@NgModule({
  imports: [
    MapMeetingModule,
    ParticipationsButtonsModule,
    MeetingsComponentsModule,
    RemoveButtonModule,
    MeetingJoinButtonModule,
    RouterModule.forChild(routes),
    CommonModule,
    PipesModule
  ],
  declarations: [MapMeetingPageComponent, MapMeetingDetailsPageComponent]
})
export class MapMeetingPageModule { }
