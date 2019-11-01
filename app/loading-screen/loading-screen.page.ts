import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.page.html',
  styleUrls: ['./loading-screen.page.scss'],
})
export class LoadingScreenPage implements OnInit {
  
  constructor( public router: Router,public Menu:MenuController) {
    
    this.Menu.enable(false, 'myMenu');
  }
  

  ngOnInit() {
   


    }


tempo = setTimeout(()=> {
  if(sessionStorage.getItem("acesso") == null){
    this.router.navigate(["login"])
  }
  else{
    this.router.navigate(["home"])
  }
}, 1000);
  
}



