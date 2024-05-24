import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SongNameService } from '../service/song-name.service';


interface Song {
  name: string;
  url: string;
}
@Component({
  selector: 'app-musica',
  standalone: true,
  imports: [],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})
export class MusicaComponent implements OnInit{

    songs: Song[] = [];
    currentSongIndex: number = 0;
    audioElement!: HTMLAudioElement;
    musicPlaying: boolean = true;
    muted=false;

  
    constructor(private http: HttpClient,private songService: SongNameService) { }
  
    ngOnInit(): void {
      const currentSong = this.songService.getCurrentSong();
    if (currentSong) {
      // Lógica para cargar y reproducir la canción actual
      this.songService.setIsPlaying(true);
    }else{
      this.http.get<Song[]>('assets/canciones.json').subscribe(songs => {
        this.songs = songs;
        this.audioElement = new Audio();
        this.audioElement.autoplay = true;
        this.audioElement.addEventListener('ended', () => this.playRandomSong());
        this.playRandomSong();
      });
    }
  }
  silenciarMusica(){

    if (this.audioElement) { // Asegurarse de que el elemento de audio existe
      this.audioElement.muted = !this.audioElement.muted; // Cambiar el estado de silencio
      this.muted = this.audioElement.muted; // Actualizar el estado de silencio en tu componente
    }

  }
  
  playRandomSong(): void {
    this.currentSongIndex = Math.floor(Math.random() * this.songs.length);
    const currentSong = this.songs[this.currentSongIndex];
    this.audioElement.src = currentSong.url;
    this.audioElement.load();
    this.audioElement.play();
    this.audioElement.volume=0.05;
    if (this.musicPlaying) {
      this.audioElement.play();
    }
    console.log(currentSong.name)

    this.songService.setCurrentSongName(currentSong.name);
  }
  




  }


