import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();


  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  toHold(form: NgForm){

    if(form.invalid){
      console.log('Invalid form');
      
      
      return;
    }

    if(this.heroe.id){
      this.heroesService.actualizeRegister(this.heroe).
      subscribe( result => {
        console.log(result);
        
      })  
    } else{
        this.heroesService.createHeroe(this.heroe).
        subscribe( result => {
          console.log(result);
          this.heroe = result;
        })  
      }


  }

}
