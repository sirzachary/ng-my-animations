import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Ingredient } from 'src/app/interfaces/ingredients.interface';
import { possibleIngredients } from 'src/app/constants/constants';

@Component({
  selector: 'app-combo3',
  templateUrl: './combo3.component.html',
  styleUrls: ['./combo3.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        style({ transform: 'scale(0.0)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.1)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ])
  ]
})

export class Combo3Component implements OnInit {

  constructor() {
    this.lottieConfig = {
      path: 'assets/lottie/burger-lottie.json',
      renderer: 'svg',
      autoplay: true,
      loop: false,
    };
  }

  public lottieConfig: object;
  private anim: any;
  private animationSpeed = 1;

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

  handleAnimation(anim: any) {
    this.anim = anim;
    this.anim.play();
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
