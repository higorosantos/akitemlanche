import { Component, OnInit } from '@angular/core';
import {NavController,LoadingController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  nome: String;
  email:String;
  assunto: String;
  desc: String;
  private loading;

  constructor(public Nav: NavController, public Loading: LoadingController,public Alert: AlertController,public rota: Router) { }

  ngOnInit() {
  }

  limparForm(){
    this.nome = ""
    this.email = ""
    this.assunto = ""
    this.desc = ""
  }
  
  submitForm(){
    var eemail = new XMLHttpRequest()
    
    eemail.onreadystatechange = function(){

       if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText)

       }
    };     
    eemail.open("GET",`http://18.231.120.151/app/enviarEmail.php?nome=${this.nome}&email=${this.email}&assunto=${this.assunto}&desc=${this.desc}`,true)
    eemail.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    eemail.send();

    this.Loading.create({
      message: "Enviando..."
    
    }).then((overlay)=> {
       this.loading = overlay
       this.loading.present()
    
    })
   setTimeout(()=>{
      this.loading.dismiss();
      this.limparForm();
      this.alertShow();
    },4000)


  }
 async alertShow(){
  const alerta = await this.Alert.create({
    message: "Enviado Com Sucesso",
    buttons: ["OK"]
    
  })
      alerta.present();
      this.rota.navigate(["home"])
  }
}
