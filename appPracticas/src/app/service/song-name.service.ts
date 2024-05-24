import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongNameService {

  private currentSongName: string = '';
  private audioElement!: HTMLAudioElement;
  private currentSong: string | null = null;
  private isPlaying: boolean = false;

  constructor() {
    // También puedes inicializarla en el constructor
    // this.currentSongName = '';
  }

  private isMuted: boolean = false;

  

  toggleMute() {
    this.isMuted = !this.isMuted;
    // Lógica adicional para mutear o desmutear la música
  }

  getIsMuted(): boolean {
    return this.isMuted;
  }
  getCurrentSong(): string | null {
    return this.currentSong;
  }

  setCurrentSong(song: string): void {
    this.currentSong = song;
  }

  setCurrentSongName(name: string) {
    this.currentSongName = name;
  }

  getCurrentSongName(): string {
    return this.currentSongName;
  }

  getIsPlaying(): boolean {
    return this.isPlaying;
  }

  setIsPlaying(isPlaying: boolean): void {
    this.isPlaying = isPlaying;
  }
  
}
