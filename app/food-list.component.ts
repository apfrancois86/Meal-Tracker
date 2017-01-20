import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `

      <div *ngFor="let currentFood of childFoodList">
        <h2>{{currentFood.food}}</h2>
        <ul>
        <li>Description: {{currentFood.description}}</li>
        <li>Calories: {{currentFood.calories}}</li>
        </ul>
        <button (click)="editButtonHasBeenClicked(currentFood)">Edit!</button>
      </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

}
