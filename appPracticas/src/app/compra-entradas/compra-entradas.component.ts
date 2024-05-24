import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MusicaComponent } from "../musica/musica.component";

@Component({
    selector: 'app-compra-entradas',
    standalone: true,
    templateUrl: './compra-entradas.component.html',
    styleUrl: './compra-entradas.component.css',
    imports: [FormsModule, MusicaComponent]
})
export class CompraEntradasComponent {

  
  @Input() cantidad: number = 0;
  @Output() cantidadCambiada = new EventEmitter<number>();

  fecha="";
  nombre="";

  sumarCantidad() {
    this.cantidad++;

  }

  restarCantidad() {
    if (this.cantidad > 0) {
      this.cantidad--;

    }
  }



}
