import { Component } from '@angular/core';
import { MusicaComponent } from "../musica/musica.component";

@Component({
    selector: 'app-noticias',
    standalone: true,
    templateUrl: './noticias.component.html',
    styleUrl: './noticias.component.css',
    imports: [MusicaComponent]
})
export class NoticiasComponent {

}
