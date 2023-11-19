
import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cartillainit',
  templateUrl: './cartillainit.component.html',
  styleUrls: ['./cartillainit.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
  ]
})
export class CartillainitComponent {

  showAnimation: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Customize this value to control when the animation triggers
    const triggerPosition = 200;

    this.showAnimation = scrollPosition > triggerPosition;
  }
}
