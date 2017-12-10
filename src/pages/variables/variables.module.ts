import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VariablesPage } from './variables';
import { VarMatrixPage } from '../var-matrix/var-matrix';

import { VariablesManagementProvider} from '../../providers/variables-management/variables-management';

@NgModule({
  declarations: [
    VariablesPage,
    VarMatrixPage,
  ],
  imports: [
    IonicPageModule.forChild(VariablesPage),
    IonicPageModule.forChild(VarMatrixPage),    
  ],
  providers: [
    VariablesManagementProvider,
  ],
  entryComponents: [
    VarMatrixPage
  ]
})
export class VariablesPageModule {}

