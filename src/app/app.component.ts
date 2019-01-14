import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';

const config = {
  apiKey: 'AIzaSyBCX5GLfFFs0QRX6OEeW_Sj1iGQnaO8H9c',
  authDomain: 'geotracker1-ca999.firebaseapp.com',
  databaseURL: 'https://geotracker1-ca999.firebaseio.com',
  projectId: 'geotracker1-ca999',
  storageBucket: 'geotracker1-ca999.appspot.com',
  messagingSenderId: "40237978929"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp(config);
  }
}

