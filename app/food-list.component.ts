import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
      <label> Select Meals by Calorie Content</label>
      <select (change)="onChange($event.target.value)">
        <option value="allFood" selected="selected">All Meals</option>
        <option value="badFood">Meals over 500 Calories</option>
        <option value="goodFood">Meals Under 500 Calories</option>
      </select>
      <div class="meal" *ngFor="let currentFood of childFoodList | calories:filterByCalories">
        <h2>{{currentFood.food}}</h2>
        <ul>
        <li>Description: {{currentFood.description}}</li>
        <li>Calories: {{currentFood.calories}}</li>
        </ul>
        <button (click)="editButtonHasBeenClicked(currentFood)">Edit!</button>
      </div>
      <h5>{{totalCalorie}}</h5>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  filterByCalories: string = "allFood";

  onChange(optionFromMenu) {
  this.filterByCalories = optionFromMenu;
  }
}
