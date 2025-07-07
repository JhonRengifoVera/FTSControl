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

  getTimeOfDay(date: Date = new Date()): 'Buenos dias' | 'Buenas tardes' | 'Buenas noches' {
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) {
      return 'Buenos dias';
    } else if (hour >= 12 && hour < 18) {
      return 'Buenas tardes';
    } else {
      return 'Buenas noches';
    }
  }

  setNombreMes(mes: number) {
    const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    return nombresMeses[mes];
  }

}
