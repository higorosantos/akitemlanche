import { Lanchonete } from './../models/lanchonete';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicos/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lanchonete-inserir',
  templateUrl: './lanchonete-inserir.page.html',
  styleUrls: ['./lanchonete-inserir.page.scss'],
})
export class LanchoneteInserirPage implements OnInit {

   
    data: Lanchonete
   
    constructor(
      public apiService: ApiService,
      public router: Router
    ) {
      this.data = new Lanchonete();
    }
   
    ngOnInit() {
    }
   
    submitForm() {
      this.apiService.createItem(this.data).subscribe((response) => {
        this.router.navigate(['Lanchonete-list']);
      });
   
    }
   
  }