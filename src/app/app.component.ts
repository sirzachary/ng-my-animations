import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/router-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
  ]
})
export class AppComponent {
  title = 'ng-my-animations';

  sets = [
    {
      name: 'COMBO A',
      image: 'https://i.ytimg.com/vi/ZjA8jUP_0uo/maxresdefault.jpg',
      route: '/combo/1',
      includes: [
        'CSS Animations'
      ]
    },
    {
      name: 'COMBO B',
// tslint:disable-next-line: max-line-length
      image: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/start-offering-6-classic-meal-deal-november.jpg?itok=P-AOJ8x0',
      route: '/combo/2',
      includes: [
        'Angular Animations',
        'CSS Animations'
      ]
    },
    {
      name: 'COMBO C',
// tslint:disable-next-line: max-line-length
      image: 'https://cdn.vox-cdn.com/thumbor/Y3WxyZsBOeWApJbvn5y-mi9WIis=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/61889907/mcdonalds_new_breakfast_sandwiches.0.jpg',
      route: '/combo/3',
      includes: [
        'Haiku',
        'Angular Animations',
        'CSS Animations'
      ]
    },
  ];

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}

