import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MusicaComponent } from "../musica/musica.component";

@Component({
    selector: 'app-contactanos',
    standalone: true,
    templateUrl: './contactanos.component.html',
    styleUrl: './contactanos.component.css',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MusicaComponent]
})
export class ContactanosComponent {
  form: FormGroup;
  value:any;
boton: any;

  constructor(private _builder: FormBuilder){
    this.form=this._builder.group({
      usuario:['',Validators.required],
      email:['', Validators.compose([Validators.email,Validators.required])],
      comentario:[''],
  })
}

enviar(values:any){
  console.log(values);
   var txt="Usuario:"+values.usuario +"\nEmail:"+values.email+ " \nComentario:"+values.comentario
}
}
