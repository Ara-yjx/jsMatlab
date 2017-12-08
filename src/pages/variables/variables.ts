import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { MatrixPage } from '../matrix/matrix';
// import { PetryMatrix } from '../../assets/js/petrymatrix';


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
    public navParams: NavParams
  ) {
    // this.pm = PetryMatrix;
  }



  ionViewDidLoad() {
    
    // this.pm.testlog();
    

  }
}
