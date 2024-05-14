import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
    public characterList: Character[] =[{
      id: '',
      name: 'Trunks',
      power: 10
    }]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(index: string): void {
    this.onDeleteId.emit(index)
  }

}
