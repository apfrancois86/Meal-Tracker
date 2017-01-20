import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Enter name of Food:</label>
      <input #newFood><br>
      <label>Enter Food Description:</label>
      <input #newDescription><br>
      <label>Enter Total Calories in Food:</label>
      <input #newCalories><br>
      <button>Add</button>
    </div>
   `

})


export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(food: string, description: string, calories: number) {
    var newFoodToAdd: Food = new Food(food, description, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
