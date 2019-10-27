import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.page.html',
  styleUrls: ['./loading-screen.page.scss'],
})
export class LoadingScreenPage implements OnInit {
  
  constructor( public router: Router) { 
   
  }
  

  ngOnInit() {


  }

tempo = setTimeout(()=> {
  this.router.navigate(["home"])
}, 4000);
  
}



