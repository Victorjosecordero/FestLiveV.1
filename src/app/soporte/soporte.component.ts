import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';


 



@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PasswordModule, ButtonModule,FormsModule],
  templateUrl: './soporte.component.html',
  styleUrl: './soporte.component.css'
})


export class SoporteComponent {

  boton='btn btn-primary';

  form: FormGroup
value: any;

  constructor(private _builder: FormBuilder){
    this.form=this._builder.group({
      usuario:['',Validators.required],
      email:['', Validators.compose([Validators.email,Validators.required])],
      clave:['',Validators.required],
  })
}

enviar(values: any){
  console.log(values);
}

}
