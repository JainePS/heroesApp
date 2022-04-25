import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();


  constructor() { }

  ngOnInit(): void {
  }

  toHold(form: NgForm){

    if(form.invalid){
      console.log('Invalid form');
      
      
      return;
    }

    console.log(form);
    console.log(this.heroe);
    
    

  }

}
