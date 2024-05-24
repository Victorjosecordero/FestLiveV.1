import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SoporteComponent } from '../soporte/soporte.component';
import { ListaDeFestivalesComponent } from '../lista-de-festivales/lista-de-festivales.component';
import { MusicaComponent } from "../musica/musica.component";
import AOS from 'aos';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [CommonModule, RouterLink, RouterOutlet, SoporteComponent, ListaDeFestivalesComponent, MusicaComponent]
})
export class InicioComponent {
  title='Inicio';
  paisEvento1= 'España';
  paisEvento2= 'Portugal';
  nombresEventos=['Primaveando Latin Dance','Puro Latino Sevilla','Puro Latino Granada','Electric Heavy Dark','Rock Down Festival','I Love Reggeaton Classic'];
  usuario='Victor José Peña Cordero';
  emailUsuario='vpencor@gmail.com';
  isLogging=false;
  boton='btn btn-primary';

  greet(){
    alert('Hola');
  };


  ngOnInit(){

  }

  



  
  
}
