import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VariablesPage } from './variables';
import { MatrixPage } from '../matrix/matrix';

@NgModule({
  declarations: [
    VariablesPage,
    MatrixPage
  ],
  imports: [
    IonicPageModule.forChild(VariablesPage),
    IonicPageModule.forChild(MatrixPage),    
  ],
})
export class VariablesPageModule {}
