
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
  currentIndex = 0;
  carouselItems = [
    {
      imageUrl: 'assets/gif/malware.gif',
      title: 'MALWARE',
      description1: 'Informacion: Existen varios tipos de malware, como virus, gusanos, troyanos, ransomware, spyware, adware y rootkits, cada uno con sus propias características y métodos de propagación.\n' +
        ' Los virus y gusanos se replican y se propagan a través de archivos o redes, los troyanos se disfrazan como software legítimo para engañar a los usuarios, el ransomware cifra archivos y exige un rescate,\n' +
        ' el spyware espía actividades sin consentimiento, el adware muestra anuncios no deseados y los rootkits obtienen acceso privilegiado al sistema.',
      description2: "",
      imageUrl2: 'assets/gif/malware.jpeg'
    },
    {
      imageUrl: 'assets/gif/phishing-phisher.gif',
      title: 'PHISHING',
      description1: 'Información: El phishing es un ataque en el que los delincuentes intentan engañar a las personas para que revelen información confidencial, como contraseñas o información financiera, a menudo a través de correos electrónicos, mensajes de texto o llamadas telefónicas.',
      description2: 'Ejemplo: correos electrónicos de phishing que simulan ser de instituciones bancarias o proveedores de servicios y solicitan información personal.',
      imageUrl2: 'assets/gif/phishing.png'
    },
    {
      imageUrl: 'assets/gif/ransomware.gif',
      title: 'RANSOMWARE',
      description1: 'Informacion: \n' +
        'El ransomware es un tipo de software malicioso\n,' +
        ' que bloquea el acceso a archivos o sistemas y exige un rescate para restaurar la información.\n' +
        ' Esta forma de ataque cifra los datos de la víctima o bloquea el acceso al dispositivo,\n,' +
        ' mostrando mensajes que solicitan un pago para proporcionar la clave de desbloqueo.\n' +
        ' Suele propagarse a través de correos electrónicos fraudulentos o descargas de software infectado,\n' +
        ' y puede causar pérdida de datos, interrupción de operaciones y daños financieros significativos,\n' +
        ' resaltando la importancia de medidas preventivas como actualizaciones regulares, copias de seguridad y educación en ciberseguridad.',
      description2: 'ejemplo: Sitios web comprometidos:\n' +
        'Los sitios web comprometidos pueden ser otra fuente de infección. Los atacantes pueden incrustar\n' +
        ' códigos maliciosos en sitios web legítimos o crear sitios web falsos que ofrecen descargas aparentemente útiles, como software gratuito o actualizaciones falsas.',
      imageUrl2: 'assets/gif/Ransomware.jpg'
    },

    {
      imageUrl: 'assets/gif/ingsocial.png',
      title: 'Ingenieria Social',
      description1: 'Los ataques de ingeniería social manipulan a las personas para que compartan información\n' +
        ' que no deberían compartir, descarguen software que no deberían descargar, visiten sitios web que no\n' +
        ' deberían visitar, envíen dinero a delincuentes o cometan otros errores que comprometan su seguridad\n' +
        ' personal u organizacional. Dado que la ingeniería social utiliza la manipulación psicológica y aprovecha\n' +
        ' los errores o debilidades humanas en lugar de las vulnerabilidades técnicas o digitales de los sistemas, a veces se denomina "hacking humano"',
      description2: '',
      imageUrl2: 'assets/gif/ingsocial.jpg'
    },
    {
      imageUrl: 'assets/gif/cprr.jpg',
      title: 'MALWARE',
      description1: '',
      description2: "",
      imageUrl2: 'assets/gif/malware.jpeg'

    }


    // Agrega más elementos según sea necesario
  ];
  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }
  showAfter() {
    this.currentIndex = (this.currentIndex - 1) % this.carouselItems.length;
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
