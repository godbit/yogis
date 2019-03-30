import { animation, style, animate, keyframes } from '@angular/animations';

export const pulseAnimation = animation([
    style({ transform: 'scale(1)' }),
    animate(
        '{{ time }}',
        keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale({{ scale }})', offset: 0.5 }),
            style({ transform: 'scale(1)', offset: 1 })
        ])
    )
]);

export const slideInAnimation = animation([
    style({ transform: 'translateY({{ from }})', opacity: 0 }),
    animate('{{ time }}', style({ transform: 'translateY(0)', opacity: 1 }))
]);

export const slideOutAnimation = animation([
    animate(
        '{{ time }}',
        style({ transform: 'translateY({{ to }})', opacity: 0 })
    )
]);

export const flipInAnimation = animation([
    animate(
        '{{ time }}',
        keyframes([
            style({ transform: 'rotateX(-90deg)', offset: 0, color: '{{ initialColor }}' }),
            style({ transform: 'scale({{ scale }})', offset: 0.5 }),
            style({ transform: 'rotateX(0)', offset: 1, color: '{{ finalColor }}' })
        ])
    )
]);
