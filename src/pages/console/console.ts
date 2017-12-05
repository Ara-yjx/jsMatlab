import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.outputText = [];
    this.inputText = "";
    // this.dim = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsolePage');
    setTimeout(() => {
      this.content.scrollToBottom(300);
    }, 1000);
  }


  printcmd() {
    // if(characterCode == 13)
    // {
    //     return false; // returning false will prevent the event from bubbling up.
    // }
    // else
    // {
    //     return true;
    // }
    this.outputText.push(this.inputText);
    this.inputText = "";

    this.dim = this.content.getContentDimensions();
    this.content.scrollTo(0, this.dim.scrollHeight, 400);
    // Harah: using scrollTo(.., scrollHeight, ..) is better then scroolToBottom
    // because the latter does not always scroll to the very end
  }

  clearcmd(fab) {
    fab.close();
    this.outputText = [];
    this.dim = this.content.getContentDimensions();
    this.content.scrollTo(0, this.dim.scrollHeight, 400);
  }

}
