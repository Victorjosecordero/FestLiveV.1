import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CantantesService {

  private API_SERVER= "http://localhost:8080/web/cantantes";

  constructor( private httpClient: HttpClient) { }
 
   private getCantantes():Observable<any>{
     return this.httpClient.get(this.API_SERVER)
   }
 
   public saveCantante(persona:any):Observable<any>{
     return this.httpClient.post(this.API_SERVER,persona)
    }
 
    list(){
     return this.httpClient.get(this.API_SERVER)
    }
 
    delete(id:number){
     return this.httpClient.delete(`http://localhost:8080/web/cantantes/${id}`)
    }
}
