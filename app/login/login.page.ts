import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicos/cliente.service';
import { Router } from '@angular/router';
var status = sessionStorage.getItem("acesso");
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   email:String;
   senha:String;
  

  dataList:any;
  usuario: any = [];
  constructor(public apiCliente: ClienteService,public rota:Router) {
  
  }
    
  ngOnInit() {
    
  }
  logar() {
    //Lista todos os profissionais
     this.apiCliente.login(this.email,this.senha).subscribe(response => {
       console.log(response);
       this.usuario = response;
       console.log(this.usuario[0].nome)
       sessionStorage.setItem("acesso",'true')
       sessionStorage.setItem("idUsuario",`${this.usuario[0].id}`)
       sessionStorage.setItem("Nome",`${this.usuario[0].nome}`)
       if(this.usuario[0] != ""){
          document.getElementById("myMenu").style.visibility = "visible";
         this.rota.navigate(["home"])
         
       }
     })
     
    
   }

}