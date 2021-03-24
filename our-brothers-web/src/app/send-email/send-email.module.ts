import { NgModule } from '@angular/core';
import { SendEmailComponent } from './send-email/send-email.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [SendEmailComponent],
    exports: [SendEmailComponent],
    imports: [CommonModule]
})
export class SendEmailModule { }
