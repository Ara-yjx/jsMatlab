import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsolePage } from './console';
// import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    ConsolePage,
  ],
  imports: [
    // BrowserModule,    
    IonicPageModule.forChild(ConsolePage),
    // IonicStorageModule.forRoot()
  ]
})
export class ConsolePageModule {}
