import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VariablesPage } from './variables';

@NgModule({
  declarations: [
    VariablesPage,
  ],
  imports: [
    IonicPageModule.forChild(VariablesPage),
  ],
})
export class VariablesPageModule {}
