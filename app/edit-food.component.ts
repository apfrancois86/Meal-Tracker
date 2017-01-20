import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
      <div>
        <div class="editMeal" *ngIf="childSelectedFood">
          <h3>{{childSelectedFood.food}}</h3>
          <hr>
          <h4>Edit Meal</h4>
          <label>Enter name of food:</label>
          <input [(ngModel)]="childSelectedFood.food"><br>
          <label>Enter description of food:</label>
          <input [(ngModel)]="childSelectedFood.description"><br>
          <label>Enter total calories in food:</label>
          <input type="number" [(ngModel)]="childSelectedFood.calories"><br>
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
