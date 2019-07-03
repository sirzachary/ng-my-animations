import {
  trigger,
  transition,
  style,
  query,
  animate,
  stagger
} from '@angular/animations';

export const fadeOut =
  trigger('fadeOut', [
    transition(':leave', [
      style({
        position: 'absolute'
      }),
      animate('0.5s', style({
        opacity: 0,
      }))
    ])
  ]);

export const slideInList =
  trigger('slideInList', [
    transition('* => *', [
      query(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-50%)',
        }),
        stagger(100, [
          animate('0.5s', style({
            opacity: 1,
            transform: 'translateX(0%)',
          }))
        ])
      ], {
          optional: true
        }),
      query(':leave', [
        stagger(100, [
          animate('0.5s ease-in', style({
            transform: 'translateX(-50%)',
            opacity: 0,
          })),
          animate('0.2s ease-in', style({
            height: '0px',
            'padding-top': '0px',
            'padding-bottom': '0px',
          })),
        ])
      ], {
          optional: true
        }),
    ])
  ])
