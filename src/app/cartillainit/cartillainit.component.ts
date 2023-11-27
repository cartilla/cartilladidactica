import { Component, HostListener, ViewChild } from '@angular/core';
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
  currentIndex = 0;
  carouselItems = [
    {
      imageUrl: 'assets/gif/phishing-phisher.gif',
      title: 'PHISHING',
      description1: 'Información: El phishing es un ataque en el que los delincuentes intentan engañar a las personas para que revelen información confidencial, como contraseñas o información financiera, a menudo a través de correos electrónicos, mensajes de texto o llamadas telefónicas.',
      description2: 'Ejemplo: Mostrar ejemplos de correos electrónicos de phishing que simulan ser de instituciones bancarias o proveedores de servicios y solicitan información personal.',
      videoUrl:'https://youtu.be/M2HaMR3H0Cg?si=QqDTVWOJ7kyEBZ3q'
    },
    {
      imageUrl: 'assets/gif/ciberseguridad.gif',
      title: 'xd',
      description1: 'como es',
      description2: 'por que',
      videoUrl:'https://www.youtube.com/watch?v=M2HaMR3H0Cg&ab_channel=SBSPer%C3%BA'
    },

    // Agrega más elementos según sea necesario
  ];

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  showAnimation: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Customize this value to control when the animation triggers
    const triggerPosition = 200;

    this.showAnimation = scrollPosition > triggerPosition;
  }
}
