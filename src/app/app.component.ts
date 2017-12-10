import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { ConsolePage } from '../pages/console/console';
import { VariablesPage } from '../pages/variables/variables';
import { VariablesManagementProvider} from '../providers/variables-management/variables-management';
// import { VarMatrixPage } from '../pages/var-matrix/var-matrix';
import { Storage } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public varManage: VariablesManagementProvider,
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Variables', component: VariablesPage },
      { title: 'Hello', component: HelloIonicPage },
      { title: 'Console', component: ConsolePage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);

    this.varManage.testSet();
  }





}
