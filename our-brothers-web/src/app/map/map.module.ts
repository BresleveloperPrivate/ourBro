import { Meeting } from 'models';

import { MapComponent } from './map.component';
//import { ContactFormModule } from '../../shared/components/contact-form/contact-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ParticipationsButtonsModule } from '../shared/components/participations-buttons/participations-buttons.module';
import { MeetingsComponentsModule } from '../shared/components/meetings/meetings-components.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { RemoveButtonModule } from '../shared/components/remove-button/remove-button.module';
import { MeetingJoinButtonModule } from '../shared/components/meeting-join-button/meeting-join-button.module';
import { MeetingsModule } from '../meetings/meetings.module'
//import { HostMeetingInputTextComponent } from '../meetings/host-meeting-input-text/host-meeting-input-text.component';
//import { MeetingParticipatesListComponent } from '../Meetings/meeting-participates-list/meeting-participates-list.component';

//const api = [HostMeetingInputTextComponent, MeetingParticipatesListComponent];

const routes = [
    {
        path: '',
        component: MapComponent
    }
];

@NgModule({
    imports: [
        MeetingsComponentsModule,
        RouterModule.forChild(routes),
        ParticipationsButtonsModule,
        RemoveButtonModule,
        MeetingJoinButtonModule,
        CommonModule,
        // MeetingParticipatesListComponent,
        PipesModule,
        MeetingsModule,
        CommonModule
    ],
    declarations: [
        MapComponent
        //api
    ]
    //exports: api
})
export class MapModule { }
