import {
  trigger,
  animate,
  transition,
  style,
  group,
  query,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnim', [
  transition(':increment', [
    query(
      ':enter,:leave',
      [
        style({
          position: 'fixed',
          top: 0,
          left: 0,
        }),
      ],
      { optional: true }
    ),

    group([
      query(
        ':leave',
        [
          animate(
            '400ms ease-in',
            style({
              opacity: 0,
              transform: 'translateX(-80px)',
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({
            opacity: 0,
            transform: 'translateX(80px)',
          }),
          animate(
            '400ms 100ms ease-out',
            style({
              opacity: 1,
              transform: 'translateX(0px)',
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  transition(':decrement', [
    query(
      ':enter,:leave',
      [
        style({
          position: 'fixed',
          top: 0,
          left: 0,
        }),
      ],
      { optional: true }
    ),

    group([
      query(
        ':leave',
        [
          animate(
            '400ms ease-in',
            style({
              opacity: 0,
              transform: 'translateX(80px)',
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({
            opacity: 0,
            transform: 'translateX(-80px)',
          }),
          animate(
            '400ms 100ms ease-out',
            style({
              opacity: 1,
              transform: 'translateX(0px)',
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
