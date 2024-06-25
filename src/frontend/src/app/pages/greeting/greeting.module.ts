import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { GreetingRoutes } from './greeting.routing';
import { AppGreetingComponent } from './app-greeting/app-greeting.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GreetingRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    AppGreetingComponent
  ],
})
export class GreetingModule {}