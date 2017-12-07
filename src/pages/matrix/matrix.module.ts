import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatrixPage } from './matrix';

@NgModule({
  declarations: [
    MatrixPage,
  ],
  imports: [
    IonicPageModule.forChild(MatrixPage),
  ],
})
export class MatrixPageModule {}
