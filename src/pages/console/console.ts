import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ConsolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-console',
  templateUrl: 'console.html',
})
export class ConsolePage {

  @ViewChild(Content) content:Content;

  public outputText;
  public inputText;
  public dim;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage
  ) {
    this.outputText = [];
    this.inputText = "";
    console.log("CONSTRUCTOR CALLED");
    // this.dim = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsolePage');
    if(this.content) {
      this.dim = this.content.getContentDimensions();
      this.content.scrollTo(0, this.dim.scrollHeight, 300);
    };
    // Petry: without the "if" line, it will crash if user
    // successively open (eg. doubleclick) the page
    
    this.storage.get('outputText').then( (val) => {
      this.outputText = val;
    })
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave ConsolePage');
    this.storage.set('outputText', this.outputText);    
  }

  printcmd() {
    this.outputText.push(this.inputText);
    this.inputText = "";

    if(this.content) {
      this.dim = this.content.getContentDimensions();
      this.content.scrollTo(0, this.dim.scrollHeight, 300);
    };
    // Petry: using scrollTo(.., scrollHeight, ..) is better then scroolToBottom
    // because the latter does not always scroll to the very end

  }

  clearcmd(fab) {
    fab.close();
    this.outputText = [];
    if(this.content) {
      this.dim = this.content.getContentDimensions();
      this.content.scrollTo(0, this.dim.scrollHeight, 300);
    };
  }

}
