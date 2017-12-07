import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatrixPage } from '../matrix/matrix';
import { PetryMatrix } from '../../assets/js/petrymatrix';
// import interact = require('interactjs');
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
})
export class VariablesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public pm: PetryMatrix
  ) {
    
  }



  ionViewDidLoad() {
    
    console.log(this.pm);
    console.log('ionViewDidLoad VariablesPage');
  }

  
}
