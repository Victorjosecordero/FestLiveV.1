import { Component } from '@angular/core';
import { MusicaComponent } from "../musica/musica.component";

@Component({
    selector: 'app-preguntas-frecuentes',
    standalone: true,
    templateUrl: './preguntas-frecuentes.component.html',
    styleUrl: './preguntas-frecuentes.component.css',
    imports: [MusicaComponent]
})
export class PreguntasFrecuentesComponent {

}
