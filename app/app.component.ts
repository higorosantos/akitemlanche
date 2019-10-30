<<<<<<< HEAD
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Lanchonetes',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Contato',
      url: '/contato',
      icon: 'contact'
    },
    {
      title: 'Quem Somos',
      url: '/dev',
      icon: 'people'
    },
    {
      title: 'Políticas de Privacidade',
      url: '/politicas',
      icon: 'book'
    },
    {
      title:'Cadastrar',
      url:'/lanchonete-inserir',
      icon:'contact'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
=======
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Lanchonetes',
      url: '/list',
      icon: 'pizza'
    },
    {
      title: 'Contato',
      url: '/contato',
      icon: 'contact'
    },
    {
      title: 'Quem Somos',
      url: '/dev',
      icon: 'people'
    },
    {
      title: 'Políticas de Privacidade',
      url: '/politicas',
      icon: 'book'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
>>>>>>> 824d77c87fcf1070c09b974676041ff871d8237a
