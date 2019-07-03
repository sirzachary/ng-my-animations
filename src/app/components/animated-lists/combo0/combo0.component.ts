import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredients.interface';
import { possibleIngredients } from 'src/app/constants/constants';

@Component({
  selector: 'app-combo0',
  templateUrl: './combo0.component.html',
  styleUrls: ['./combo0.component.scss']
})
export class Combo0Component implements OnInit {

  constructor() { }

  loading = false;
  showBuilder = true;
  showBurger = false;

  list: Ingredient[] = [
    {
      name: 'Sauce',
      calories: 20,
      image: 'assets/images/Sauce.png'
    },
    {
      name: 'Meat',
      calories: 200,
      image: 'assets/images/Meat.png'
    },
  ];

  possibleIngredients = possibleIngredients;

  ngOnInit() {
  }

  get totalCalories(): number {
    return this.list.reduce((acc, curr) => {
      return acc + curr.calories;
    }, 0);
  }

  addToList(ingredient: Ingredient) {
    console.log(this.list.length);
    if (this.list.length < 5) {
      this.list.push(ingredient);
      return;
    }
    console.log('Too many items!');
  }

  remove(i: number) {
    if (i > -1) {
      console.log(this.list.splice(i, 1));
    }
  }

  buildBurger() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.showBuilder = false;
      this.showBurger = true;
    }, Math.floor(Math.random() * 5000) + 3000);
  }
}
