import { Component } from '@angular/core';
import { MusicaComponent } from "../musica/musica.component";

@Component({
    selector: 'app-empresas',
    standalone: true,
    templateUrl: './empresas.component.html',
    styleUrl: './empresas.component.css',
    imports: [MusicaComponent]
})
export class EmpresasComponent {

  empresas=[
    {
      id:"1",
      nombre:"Grefusa",
      enlace:"https://grefusa.com",
      img:"./../../assets/logos-marcas/logo-grefusa.svg",
      alt:"Imagen del logo de grefusa",
    },
    {
      id:"2",
      nombre:"Spotify",
      enlace:"https://spotify.com",
      img:"./../../assets/logos-marcas/spotify.svg",
      alt:"Imagen del logo de Spotify",
    },
    {
      id:"3",
      nombre:"Vicio",
      enlace:"https://www.ganasdevicio.com",
      img:"./../../assets/logos-marcas/vicio.svg",
      alt:"Imagen del logo de Vicio",
    },
    {
      id:"4",
      nombre:"Alsa",
      enlace:"https://www.alsa.es",
      img:"./../../assets/logos-marcas/alsa.svg",
      alt:"Imagen del logo de Alsa",
    },
    {
      id:"5",
      nombre:"Revoult",
      enlace:"https://www.revolut.com/es-ES/",
      img:"./../../assets/logos-marcas/revoult.svg",
      alt:"Imagen del logo de Revoult",
    },
    {
      id:"6",
      nombre:"Prime",
      enlace:"https://drinkprime.com",
      img:"./../../assets/logos-marcas/prime.svg",
      alt:"Imagen del logo de Prime",
    },
  ]

}
