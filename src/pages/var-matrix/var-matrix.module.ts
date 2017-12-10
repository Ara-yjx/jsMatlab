import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VarMatrixPage } from './var-matrix';

@NgModule({
  declarations: [
    VarMatrixPage,
  ],
  imports: [
    IonicPageModule.forChild(VarMatrixPage),
  ],
})
export class VarMatrixPageModule {}
