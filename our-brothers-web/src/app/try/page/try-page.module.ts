import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TryPageComponent } from './try-page.component';
import { ParticipationsButtonsModule } from '../../shared/components/participations-buttons/participations-buttons.module';
import { MeetingsComponentsModule } from '../../shared/components/meetings/meetings-components.module';
import {TryDetailsPageComponent } from '../details-page/try-details-page.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { TryModule } from '../try.module';
import { RemoveButtonModule } from '../../shared/components/remove-button/remove-button.module';
import { MeetingJoinButtonModule } from '../../shared/components/meeting-join-button/meeting-join-button.module';

const routes = [
  {
    path: '',
    component: TryPageComponent
  },
  {
    path: ':memorialYear/:hostId/:meetingId',
    component: TryDetailsPageComponent
  }
];

@NgModule({
  imports: [
    TryModule,
    ParticipationsButtonsModule,
    MeetingsComponentsModule,
    RemoveButtonModule,
    MeetingJoinButtonModule,
    RouterModule.forChild(routes),
    CommonModule,
    PipesModule
  ],
  declarations: [TryPageComponent, TryDetailsPageComponent]
})
export class TryPageModule { }
