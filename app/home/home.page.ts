import { Component } from '@angular/core';
import {ApiService} from '../servicos/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lanchonetesDestaque:any;
  constructor(public api:ApiService) {
    this.lanchonetesDestaque = []
  }

  ngOnInit(){
    this.getAllDestaques();
    
  }

  getAllDestaques() {
    //Lista todos as lanchonetes em destaque
    
     this.api.getDestaque().subscribe(response => {
       console.log(response);
       this.lanchonetesDestaque = response;
     })
   }

}
