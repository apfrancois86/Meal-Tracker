import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: "calories",
  pure: false
})


export class CaloriePipe implements PipeTransform {
  transform(input: Food[], calorieCounter){
    var output: Food[] = [];
    if(calorieCounter === "badFood") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieCounter === "goodFood") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
