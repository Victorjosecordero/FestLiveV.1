import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { ListaDeFestivalesComponent } from '../lista-de-festivales/lista-de-festivales.component';
import { FormBuilder } from '@angular/forms';
import { CantantesService } from '../service/cantantes.service';
import { HttpClient } from '@angular/common/http';
import { Eventos } from '../model/eventos.interface';
import { EventosService } from '../service/eventos.service';
import { FormatFechaPipe } from '../pipe-fecha.pipe';
import { MusicaComponent } from "../musica/musica.component";

@Component({
    selector: 'app-festivales',
    standalone: true,
    templateUrl: './festivales.component.html',
    styleUrl: './festivales.component.css',
    imports: [ListaDeFestivalesComponent, FormatFechaPipe, MusicaComponent]
})
export class FestivalesComponent {

  constructor(
    public fb: FormBuilder,
    public eventos: EventosService,
    private http: HttpClient
  ){}

  lista_eventos: Eventos[]=[];

  loadAll(){
    this.eventos.list()
    .subscribe((eventos:any) =>{
    this.lista_eventos=eventos;
  } )
  }

  ngOnInit():void{
    this.loadAll()
   
   }


}
