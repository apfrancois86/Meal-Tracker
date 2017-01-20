import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `

      <div *ngFor="let currentFood of childFoodList">
      <h2>{{currentFood.food}}
      <ul>
      <li>Description: {{currentFood.description}}</li>
      <li>Calories: {{currentFood.calories}}</li>
      </ul>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
}
