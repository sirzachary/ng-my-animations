import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter', [
                style({
                    opacity: 0,
                    position: 'absolute',
                    width: '100%',
                    right: '-20%',
                })
            ], { optional: true }),
            query(':leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ], { optional: true }),
            group([
                query(':leave', [
                    animate('600ms ease-out', style({
                        left: '-20%',
                        opacity: 0,
                    }))
                ], { optional: true }),
                query(':enter', [
                    animate('600ms ease-out', style({
                        right: '0%',
                        opacity: 1,
                    }))
                ], { optional: true, delay: '600ms' })
            ]),
            query(':enter', animateChild(), { optional: true }),
        ]),
    ]);
