import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CantantesService } from '../service/cantantes.service';
import { Cantante } from '../model/cantante.interface';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SongStopService } from '../service/song-stop.service';


@Component({
    selector: 'app-cantantes',
    standalone: true,
    templateUrl: './cantantes.component.html',
    styleUrl: './cantantes.component.css',
    imports: [CommonModule, RouterOutlet, HttpClientModule]
})
export class CantantesComponent {



  // region POST
  constructor(
    public fb: FormBuilder,
    public cantantes: CantantesService,
    private http: HttpClient,
    private stopM: SongStopService
  ){}
  artistas:any[] | undefined;

  lista_cantantes: Cantante[]=[];

  loadAll(){
    this.cantantes.list()
    .subscribe((cantantes:any) =>{
    this.lista_cantantes=cantantes;
  } )
  }

  loadAll2(){
    this.http.get("http://localhost:8080/web/cantantes")
    .subscribe((res:any) =>{
    this.lista_cantantes=res;
  } )
  }
 

  artistaSeleccionado: any; 

  ngOnInit():void{
   // this.loadAll();
   this.loadAll2()
  }

  seleccionarArtista(artista: any) {
    this.artistaSeleccionado = artista;
  }

  borrarEstudiante(cantante:Cantante){
    this.cantantes.delete(cantante.id).subscribe(()=>{
      this.loadAll();

    })

  }

  song= new Audio();

   sonando=false;
  openSong(song:any){
    var url="./../../assets/music/";
    this.song.src=url +song+".mp3";
    this.song.load()
    if(this.sonando==false){
      this.song.play()
      this.sonando=true

    }else{
      this.song.pause()
      this.sonando=false

      
    }


    console.log(this.song.src)
  }

  playSong(){
    this.song.play()
  }
  pauseSong(){
    this.song.pause()
  }
  stopSong(){
    this.song.pause()
    this.song.currentTime=0
  }

  vol(vl:any){
    this.song.volume=vl.target.value

  }
}
