import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

//console.log(v4());

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters : Character[] = [
        {
            id:uuid(),
            name :'Krilling',
            power :1000
        },
        {
            id:uuid(),
            name:'Goku',
            power:9500
        },
        {
            id:uuid(),
            name:'Vegeta',
            power:7500
        }
    ];
    
    //onNewCharacter(character:Character):void{
    //onNewCharacter({name,power}:Character):void{
    addCharacter(character:Character):void{
        
        const newCharacter : Character ={id:uuid(), ...character}
       //const newCharacter : Character ={...character}
       /* const newCharacter : Character = {
            id:uuid(),
            name:name,
            power:power
            //name:character.name,
            //power: character.power
        }*/

        this.characters.push(newCharacter);
        //debugger;
        //console.log('MainPage');
        //console.log(character);
    }
    
   /* onDeleteCharacter(index:number):void{
        this.characters.splice(index,1);
    }*/
    deleteCharacterById(id:String){
        this.characters = this.characters.filter(character => character.id !== id);
    }

}