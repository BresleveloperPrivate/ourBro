import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './menu-item.component';
//import { LoginFormComponent } from '../../../auth/login-form/login-form.component';

const api = [
  MenuItemComponent
  // LoginFormComponent
];

@NgModule({
  declarations: [...api],
  exports: api,
  imports: [CommonModule, RouterModule]
})
export class MenuItemModule {}
