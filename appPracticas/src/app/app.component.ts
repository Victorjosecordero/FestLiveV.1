import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CantantesService } from './service/cantantes.service';
import { SongNameService } from './service/song-name.service';
import { Cantante } from './model/cantante.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MusicaComponent } from './musica/musica.component';
import { GoogleMapsModule } from '@angular/google-maps';








@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet,MusicaComponent,GoogleMapsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title="appPracticas"
 
  usuario='Victor José Peña Cordero';
  emailUsuario='vpencor@gmail.com';
  isLogging=false;
  boton='btn btn-primary';


  personaForm!: FormGroup;

  currentSongName: string = '';
  muted: void | undefined;

  constructor(
    public fb: FormBuilder,
    public cantantes: CantantesService,
    private songService: SongNameService
  ){}

  ngOnInit() {
    setTimeout(() => {
      // Obtener el nombre de la canción actual desde el servicio después de 2000 milisegundos (2 segundos)
      this.currentSongName = this.songService.getCurrentSongName();
    }, 2000); // Esperar 2000 milisegundos (2 segundos) antes de ejecutar el código dentro de setTimeout
  }
  silenciarWeb(): void {
    // Itera sobre todos los elementos de audio en la página y los silencia
    const elementosAudio = document.querySelectorAll('audio');
    elementosAudio.forEach(audio => {
      audio.muted = true;
    });
  }

  lista_cantantes: Cantante[]=[];


  borrarEstudiante(cantante:Cantante){
    this.cantantes.delete(cantante.id).subscribe(()=>{


    })

  }

  guardar():void{
    this.cantantes.saveCantante(this.personaForm.value).subscribe(resp => {
      this.personaForm.reset()
    },
    error => {console.log(error)}
    );
}

}


