import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs';

const newLocal = 'id';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url =  'https://loggin-app-888ca-default-rtdb.firebaseio.com';


  constructor(private http: HttpClient) { }

  createHeroe( heroe: HeroeModel){

    return this.http.post(`${this.url}/heroes.json`, heroe)
           .pipe(
             map( (result: any) => {
              heroe.id = result.name;
              return heroe;
             }) 
           );

  }

  updateRegister( heroe: HeroeModel ){

    const heroeTemp = {
      ...heroe
    };
    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp)
  }

  deleteHeroe(id: any){
    return this.http.delete(`${this.url}/heroes/${id}.json`)
  }

  getHeroe(id: any){
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  getHeroes(){
    return this.http.get(`${this.url}/heroes.json`).
                pipe(
                map( this.createArrays),
                delay(0)
                );
  }

  private createArrays(heroesObj: object){

    const heroes: HeroeModel[] = [];
    console.log(heroesObj);

    if( heroesObj === null ){ return []; }

    Object.keys( heroesObj ).forEach( key =>{ 
      const heroe = JSON.parse(JSON.stringify(heroesObj[key as keyof Object])) as HeroeModel;
      heroe.id = key

      heroes.push(heroe)
    })

    console.log(heroes);
    
    
    return heroes;
  }


}
