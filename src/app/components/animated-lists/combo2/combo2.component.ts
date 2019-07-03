import { Component, OnInit, HostBinding } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredients.interface';
import { possibleIngredients } from 'src/app/constants/constants';
import { slideInList, fadeOut } from 'src/app/animations/animation';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-combo2',
  templateUrl: './combo2.component.html',
  styleUrls: ['./combo2.component.scss'],
  animations: [
    slideInList,
    fadeOut,
  ]
})
export class Combo2Component implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }

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
    this.dataService.fakeResponse().pipe(
      tap(() => { 
        this.loading = false;
      })
    ).subscribe(() => {
      this.showBuilder = false;
      this.showBurger = true;
    })
  }
}
