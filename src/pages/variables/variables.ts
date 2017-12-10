import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VarMatrixPage } from '../var-matrix/var-matrix';
// import { PetryMatrix } from '../../assets/js/petrymatrix';
import { VariablesManagementProvider} from '../../providers/variables-management/variables-management';
import math = require('mathjs');

/**
 * Generated class for the VariablesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-variables',
  templateUrl: 'variables.html',
  // entryComponents: [
  //   VarMatrixPage
  // ]
})
export class VariablesPage {
  pushPage: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public varManage: VariablesManagementProvider,
  ) {
    // var varMatrixPage = VarMatrixPage;
    // var pushPage = VarMatrixPage;
  }



  ionViewDidLoad() {
    this.varManage.addMatrix("ww",[1,2]);
  }

  clickCreateMatrix() {
    this.varManage.createMatrix();
    this.navCtrl.push(VarMatrixPage,{name:"TESTMATRIX"});
  }

}
