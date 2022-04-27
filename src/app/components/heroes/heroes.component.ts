import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  charging = false

  constructor(private heroesService: HeroesService) { }

  

  ngOnInit(): void {

    this.charging = true;

    this.heroesService.getHeroes().
          subscribe( resolve =>{
            this.heroes = resolve;
            this.charging = false
            });
  }

  deleteHeroe( heroe: HeroeModel, i: number ){
    
    Swal.fire({
      title:'Are sure?',
      text:`Are you sure do you want to delete the ${heroe.name}`,
      icon:'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
    if(resp.value){
      this.heroes.splice(i, 1);
    this.heroesService.deleteHeroe(heroe.id).subscribe();

    }  
    })


      }
   
}
