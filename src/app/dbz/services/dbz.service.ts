import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 1000
  }, {
    id: uuid(),
    name: "Goku",
    power: 9500
  }, {
    id: uuid(),
    name: "Vegeta",
    power: 7500
  }]

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid()}
    this.characters.push(newCharacter)
  }

  // onDeleteID(index: number): void {
  //   this.characters.splice(index, 1)
  // }

  deleteCharacterById(id:string):void {
    console.log('se esta elimianando por id y el id que se elimino fue: ', id)
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
