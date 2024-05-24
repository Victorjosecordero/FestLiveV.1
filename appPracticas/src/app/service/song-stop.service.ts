import { Injectable } from '@angular/core';

import { MusicaComponent } from '../musica/musica.component';

@Injectable({
  providedIn: 'root'
})
export class SongStopService {


  private audioElement: HTMLAudioElement | undefined;
  constructor(private musicService: MusicaComponent) { }

  ngOnInit() {
    setTimeout(() => {
      // Obtener el nombre de la canción actual desde el servicio después de 2000 milisegundos (2 segundos)

    }, 3000);
  }

  setAudioElement(audioElement: HTMLAudioElement) {
    this.audioElement = audioElement;
  }

  stop() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
  }
}
