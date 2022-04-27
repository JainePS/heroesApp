export class HeroeModel {
    id?: string;
    name: string;
    power: string;
    alive: boolean;

    constructor(){
        this.alive = true;
        this.id = '';
        this.name = 'abc';
        this.power = 'abc';
    }


}