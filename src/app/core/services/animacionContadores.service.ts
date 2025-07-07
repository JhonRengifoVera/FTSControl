import { Injectable } from '@angular/core';
import gsap from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class AnimacionContadoresService {

  constructor() { }

  animateCounter(
    context: any,
    property: keyof typeof context,
    to: number,
    duration: number = 1.5
  ) {
    const obj = { value: 0 };
    gsap.to(obj, {
      duration,
      value: to,
      ease: 'power1.out',
      onUpdate: () => {
        context[property] = Math.round(obj.value);
      }
    });
  }


}
