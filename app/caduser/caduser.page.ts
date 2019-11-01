import { Router } from '@angular/router';
import { Usuario } from './../models/usuario';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicos/cliente.service';
const date = new Date();


@Component({
  selector: 'app-caduser',
  templateUrl: './caduser.page.html',
  styleUrls: ['./caduser.page.scss'],
})
export class CaduserPage implements OnInit {

  data: Usuario
  constructor(private cliente: ClienteService,
              private router: Router,) 
              {
                this.data = new Usuario();
                this.data.id = date.getTime();
                
               }

  ngOnInit() {
  }
    submitForm(){
      this.cliente.createItem(this.data).subscribe((response)=>{
        this.router.navigate(['home'])
      })
    }
}
