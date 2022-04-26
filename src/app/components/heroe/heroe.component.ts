import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  heroe = new HeroeModel();

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  toHold(form: NgForm) {
    if (form.invalid) {
      console.log('Invalid form');

      return;
    }

    Swal.fire({
      title: 'Wait',
      text: 'Holding the information',
      icon: 'info',
      allowOutsideClick: false
});
 
    Swal.showLoading();

    let petition:Observable<any>;

    if (this.heroe.id) {
      petition = this.heroesService.actualizeRegister(this.heroe);
    } else {
    petition = this.heroesService.createHeroe(this.heroe);
    }

    petition.subscribe( result => {
      Swal.fire({
        title: this.heroe.name,
        text: 'Actualizated correctly',
        icon: 'success'
      })
    })
  }
}
