import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent],
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContactFormModule {}
