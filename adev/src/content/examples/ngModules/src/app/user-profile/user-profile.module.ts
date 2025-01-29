import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMenuModule} from '../custom-menu/custom-menu.module';
import {UserProfileComponent} from './user-profile.component';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, CustomMenuModule],
  providers: [],
})
export class UserProfileModule {}
