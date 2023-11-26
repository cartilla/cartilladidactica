import { Component } from '@angular/core';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent {
  currentIndex = 0;
  carouselItems = [
    {
      imageUrl: 'assets/gif/cprr.jpg',
      title: 'RANSOMWARE',
      description1: 'Para protegerse contra el ransomware, se recomienda mantener actualizados los sistemas y software, utilizar software antivirus y antimalware actualizado, realizar copias de seguridad regulares y evitar hacer clic en enlaces o archivos adjuntos sospechosos en correos electrónicos o sitios web desconocidos. Además, la conciencia y educación sobre la ciberseguridad son fundamentales para prevenir y responder eficazmente a este tipo de amenaza',
    },
    {
      imageUrl: 'assets/gif/ciberseguridad.gif',
      title: 'xd',
      description1: 'como es',
      description2: 'por que'
    },
    {
      imageUrl: 'assets/gif/ciberseguridad.gif',
      title: 'xewdd',
      description1: 'como es',
      description2: 'por que'
    },
    {
      imageUrl: 'assets/gif/ciberseguridad.gif',
      title: 'xdwer',
      description1: 'como es',
      description2: 'por que'
    },


    // Agrega más elementos según sea necesario
  ];
  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }
  showAfter() {
    this.currentIndex = (this.currentIndex - 1) % this.carouselItems.length;
  }

}
