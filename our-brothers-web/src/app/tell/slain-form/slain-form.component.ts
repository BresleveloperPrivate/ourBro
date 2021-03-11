import { User, BereavedProfile } from './../../../../../types/models/index';
import { Router } from '@angular/router';

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../../shared/services/utils.service';
import { Slain } from 'models';

export interface SlainForm {
  firstName: string;
  lastName: string;
  deathDate: number;
  story: string;
}

@Component({
  selector: 'app-slain-form',
  templateUrl: './slain-form.component.html',
  styleUrls: ['./slain-form.component.scss']
})
export class SlainFormComponent implements OnInit {
  @Input()
  public slain: Slain;
  @Input() user: User;

  @Output() submit = new EventEmitter<SlainForm>();
  // @Input()
  //public firebaseSlain: ;

  form: FormGroup;
  formInvalid = false;
  maxDate = new Date().toISOString().split('T')[0];

  constructor(private fb: FormBuilder, private utilsService: UtilsService, private router: Router) {}

  ngOnInit() {
    const profile: BereavedProfile = this.user.bereavedProfile || ({} as BereavedProfile);
    console.log(' SlainFormComponent profile', profile);

    // if (profile.story) {
    //   this.story = true;
    // }
    let getProp = x =>
      profile && profile.slains && profile.slains.length && profile.slains.length > 0 && profile.slains[0][x]
        ? profile.slains[0][x]
        : '';

    this.form = this.fb.group({
      firstName: [
        // profile.slains[0].firstName,
        getProp('firstName'),
        [Validators.required, Validators.maxLength(20), Validators.pattern(this.utilsService.namePattern)]
      ],
      lastName: [
        //profile.slains[0].lastName,
        getProp('lastName'),
        [Validators.required, Validators.maxLength(20), Validators.pattern(this.utilsService.namePattern)]
      ],

      deathDate: [
        new Date(getProp('deathDate') ? getProp('deathDate') : null).toISOString().split('T')[0],
        Validators.required
      ],
      story: [profile.story, [Validators.minLength(100), Validators.maxLength(500)]]
    });

    this.form.valueChanges.subscribe(() => {
      this.formInvalid = false;
    });
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get deathDate() {
    return this.form.get('deathDate');
  }

  get story() {
    return this.form.get('story');
  }

  onSubmit() {
    if (this.form.valid) {
      const parsedForm: SlainForm = {
        // firstName: this.firstName.value.trim(),
        // lastName: this.lastName.value.trim(),
        // deathDate: new Date(this.deathDate.value).getTime(),
        // story: this.story.value.trim()

        firstName: this.form.get('firstName').value.trim(),
        lastName: this.form.get('lastName').value.trim(),
        deathDate: new Date(this.form.get('deathDate').value).getTime(),
        story: this.form.get('story').value.trim()
      };

      this.submit.emit(parsedForm);
    } else {
      this.formInvalid = true;
      this.form.markAllAsTouched();
    }
  }
}
