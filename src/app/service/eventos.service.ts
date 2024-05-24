import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private API_SERVER= "http://localhost:8080/web/eventos";

  constructor( private httpClient: HttpClient) { }
 
   private getEventos():Observable<any>{
     return this.httpClient.get(this.API_SERVER)
   }
 
   public saveEventos(persona:any):Observable<any>{
     return this.httpClient.post(this.API_SERVER,persona)
    }
 
    list(){
     return this.httpClient.get(this.API_SERVER)
    }
 
    delete(id:number){
     return this.httpClient.delete(`http://localhost:8080/web/eventos/${id}`)
    }
}
