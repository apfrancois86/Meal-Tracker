import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
      <div>
        <div *ngIf="childSelectedFood">
          <h3>{{childSelectedFood.food}}</h3>
          <hr>
          <h3>Edit Meal</h3>
          <label>Enter name of food:</label>
          <input [(ngModel)]="childSelectedFood.food">
          <label>Enter description of food:</label>
          <input [(ngModel)]="childSelectedFood.description">
          <label>Enter total calories in food:</label>
          <input type="number" [(ngModel)]="childSelectedFood.calories">
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `

})

export class EditFoodComponent {
    @Input() childSelectedFood: Food;
    @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked() {
      this.doneButtonClickedSender.emit();
    }
}
