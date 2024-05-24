import { Component } from '@angular/core';
import { MusicaComponent } from "../musica/musica.component";

@Component({
    selector: 'app-eventos',
    standalone: true,
    templateUrl: './eventos.component.html',
    styleUrl: './eventos.component.css',
    imports: [MusicaComponent]
})
export class EventosComponent {



  eventos =[
    {
      id:1,
      titulo:'Evento de Inaugura',
      descripcion:'El evento se realiz',
      img:'',
      url:''

    },
  ]
}
