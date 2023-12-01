import {Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-db-main-page',
    templateUrl:'./main-page.component.html'
})
export class MainPageComponent {
  //  _DbzService:DbzService;
constructor(private dbzService:DbzService){
    
}

get characters():Character[]{
    return [...this.dbzService.characters];
}

onDeleteCharacter(id:string):void{
     this.dbzService.deleteCharacterById(id);
}

onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
}

}