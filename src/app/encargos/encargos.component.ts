import { Component } from '@angular/core';
import { MusicaComponent } from "../musica/musica.component";

@Component({
    selector: 'app-encargos',
    standalone: true,
    templateUrl: './encargos.component.html',
    styleUrl: './encargos.component.css',
    imports: [MusicaComponent]
})
export class EncargosComponent {

}
