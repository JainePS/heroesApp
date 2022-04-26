import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';

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

  actualizeRegister( heroe: HeroeModel ){

    const heroeTemp = {
      ...heroe
    };
    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp)
  }


}
