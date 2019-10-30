import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Profissional} from '../models/profissional';

@Component({
  selector: 'app-profissional-inserir',
  templateUrl: './profissional-inserir.page.html',
  styleUrls: ['./profissional-inserir.page.scss'],
})
export class ProfissionalInserirPage implements OnInit {

   
    data: Profissional
   
    constructor(
      public apiService: ApiService,
      public router: Router
    ) {
      this.data = new Profissional();
    }
   
    ngOnInit() {
    }
   
    submitForm() {
      this.apiService.createItem(this.data).subscribe((response) => {
        this.router.navigate(['profissional-list']);
      });
   
    }
   
  }