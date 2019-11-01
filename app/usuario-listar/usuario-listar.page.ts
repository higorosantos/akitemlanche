import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicos/api.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.page.html',
  styleUrls: ['./usuario-listar.page.scss'],
})
export class UsuarioListarPage implements OnInit {
   lanchonetes: any;
  constructor(public api:ApiService) {
      this.lanchonetes = []
   }

  ngOnInit() {
  }
  getAllProfissionais() {
    //Lista todos os profissionais
     this.api.getList().subscribe(response => {
       console.log(response);
       this.lanchonetes = response;
     })
   }

}
