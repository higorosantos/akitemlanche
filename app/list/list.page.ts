import { Component, OnInit ,ViewChild} from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import {Router} from '@angular/router';
import {Lanchonete} from '../models/lanchonete';
import {ApiService} from '../servicos/api.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    @ViewChild(IonInfiniteScroll,{static:false})infiniteScroll: IonInfiniteScroll;
    ;
  pesquisa: String = ""
  dataList:any;
  lanchonetes: any;
  constructor(public api:ApiService) {
    this.lanchonetes = [];
  
  }
    
  ngOnInit() {
    this.getAllLanchonetes()
  }
  getAllLanchonetes() {
    //Lista todos os profissionais
     this.api.getList().subscribe(response => {
       console.log(response);
       this.lanchonetes = response;
     })
   }
   procurar(nome){
     if(this.pesquisa == ""){
       this.getAllLanchonetes()
     }
     else{
     this.api.getItem(nome).subscribe(response => {
       console.log(response);
       this.lanchonetes = response;
     }
    
     )}
    }
   loadData(event) {
    setTimeout(() => {
    
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.lanchonetes.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}