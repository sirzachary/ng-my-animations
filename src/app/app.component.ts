import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from './animations/router-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeAnimation,
  ]
})
export class AppComponent {
  title = 'ng-my-animations';

  sets = [
    {
      name: '0',
      route: '/combo/0',
    },
    {
      name: '1',
      route: '/combo/1',
    },
    {
      name: '2',
      route: '/combo/2',
    },
    {
      name: '3',
      route: '/combo/3',
    },
  ];

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}

