import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VariablesManagementProvider} from '../../providers/variables-management/variables-management';
import math = require('mathjs');

/**
 * Generated class for the MatrixPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-var-matrix',
  templateUrl: 'var-matrix.html',
})
export class VarMatrixPage {

  public thisMatrix: any; // the matrix in varManage
  public screen = {
    x: 6,
    y: 6,
    // data: {
    //   varName: "",
    //   varType: "",
    //   varValue:[]
    // }
    name: "#",
    data: [[]],
  }; // the temporary matrix show on the screen, devided in 8*8 blocks
  // public screen = {};
  public indexesX: any;
  public indexesY: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public varManage: VariablesManagementProvider,
  ) {

    // initialize this matrix
    if (this.navParams.get('name'))
      this.thisMatrix = varManage.get(this.navParams.get('name'));
    else
      this.thisMatrix = varManage.createMatrix();

    // OvO initialize the screen
    var tmsx = math.size(this.thisMatrix.varValue).subset(math.index(0));
    var tmsy = math.size(this.thisMatrix.varValue).subset(math.index(1));
    if(this.screen.x < tmsx) this.screen.x = tmsx;
    if(this.screen.y < tmsy) this.screen.y = tmsy;
    var tmv = this.thisMatrix.varValue;    

    // OvO fill the screen with thisMatrix
    for(let i=0; i<this.screen.x; i++) {
      this.screen.data.push([]);
      for(let j=0; j<this.screen.y; j++) {
        if(i<tmsx && j<tmsy)
          this.screen.data[i].push("" + tmv.subset(math.index(i,j)));
        else
          this.screen.data[i].push("");
      }
    }

    // indexes for the ngFor in template
    this.indexesX = [];
    this.indexesY = [];
    for (let i=0; i<this.screen.x; i++) this.indexesX.push(i);
    for (let i=0; i<this.screen.y; i++) this.indexesY.push(i);    
    
    console.log("CONSTRUCTED")
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatrixPage');
  }

  done() {
    this.navCtrl.pop();
  }

}
