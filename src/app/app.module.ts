import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';

const firebaseAuth = {
    apiKey: "AIzaSyBPkIB8o5txvsiY-IASsKuOKEMZfiCjvwQ",
    authDomain: "ifarmsgmobile.firebaseapp.com",
    databaseURL: "https://ifarmsgmobile.firebaseio.com",
    projectId: "ifarmsgmobile",
    storageBucket: "ifarmsgmobile.appspot.com",
    messagingSenderId: "1065039837333"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
