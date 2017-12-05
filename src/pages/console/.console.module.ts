import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsolePage } from './console';

@NgModule({
  declarations: [
    ConsolePage,
  ],
  imports: [
    IonicPageModule.forChild(ConsolePage),
  ],
})
export class ConsolePageModule {}
