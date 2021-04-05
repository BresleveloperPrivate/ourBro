import { BereavedLanguageOption } from './select-languages.types';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BereavedLanguage } from 'models';

@Component({
  selector: 'app-select-languages',
  templateUrl: './select-languages.component.html',
  styleUrls: ['./select-languages.component.scss']
})
export class SelectLanguagesComponent {
  @Input() placeholder: string='מרצה בשפות'
  @Input() value: BereavedLanguage;
  @Output() valueChange = new EventEmitter<BereavedLanguage>();

  @Input() readonly: boolean = false;

  options: BereavedLanguageOption[] = [
    {
      value: BereavedLanguage.english,
      label: 'אנגלית'
    },
    {
      value: BereavedLanguage.spanish,
      label: 'ספרדית'
    },
    {
      value: BereavedLanguage.franch,
      label: 'צרפתית'
    },
    {
      value: BereavedLanguage.arabic,
      label: 'ערבית '
    },
    {
      value: BereavedLanguage.rusian,
      label: 'רוסית '
    },
    {
      value: BereavedLanguage.other,
      label: 'אחר'
    },

    ,]

}
