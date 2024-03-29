import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component, OnInit } from '@angular/core';


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
      title:'Cadastrar',
      url:'/lanchonete-inserir',
      icon:'contact'
    },
    {
      title: 'Contato',
      url: '/contato',
      icon: 'chatboxes'
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
    private statusBar: StatusBar,
    public rota : Router
  ) {
    this.initializeApp();
  }
  deslogar(){
    sessionStorage.clear();
    
    document.getElementById("myMenu").style.visibility = "hidden";
    window.location.href = "/login"

  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
