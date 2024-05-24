import { Component } from '@angular/core';
import { MusicaComponent } from "../musica/musica.component";

@Component({
    selector: 'app-lista-de-festivales',
    standalone: true,
    templateUrl: './lista-de-festivales.component.html',
    styleUrl: './lista-de-festivales.component.css',
    imports: [MusicaComponent]
})
export class ListaDeFestivalesComponent {
  festivales=[
    {
      id:1,
      nombre:'Primavereando',
      fechaInicio:'05/04/2024',
      fechaFinalizacion:'7/04/2024',
      lugar:'Madrid',
      pais:'España',
      url:'https://primaverandofest.es',
      entradas:[
        {
          id:1,
          nombreEntr: "Normal",
          precio:60,
          disponibles:300
      },
      {
        id:2,
        nombreEntr: "Vip",
        precio:80,
        disponibles:200

      },
      {
        id:3,
        nombreEntr: "Platinum",
        precio:200,
        disponibles:50

      }
    ]
    },
    {
      id: 2,
      nombre: "Portugal Fest",
      fechaInicio: "05/04/2024",
      fechaFinalizacion: "07/04/2024",
      lugar: "Lisboa",
      pais: "Portugal",
      entradas:[
        {
          id:1,
          nombreEntr: "Normal",
          precio:60,
          disponibles:300
      },
      {
        id:2,
        nombreEntr: "Vip",
        precio:80,
        disponibles:200

      },
      {
        id:3,
        nombreEntr: "Platinum",
        precio:200,
        disponibles:50

      }
    ]
    },
    {
      id: 3,
      nombre: "Feria del Libro",
      fechaInicio: "15/06/2024",
      fechaFinalizacion: "30/06/2024",
      lugar: "Buenos Aires",
      pais: "Argentina",
      entradas:[
        {
          id:1,
          nombreEntr: "Normal",
          precio:60,
          disponibles:300
      },
      {
        id:2,
        nombreEntr: "Vip",
        precio:80,
        disponibles:200

      },
      {
        id:3,
        nombreEntr: "Platinum",
        precio:200,
        disponibles:50

      }
    ]
    },
    {
      id: 4,
      nombre: "Oktoberfest",
      fechaInicio: "20/09/2024",
      fechaFinalizacion: "05/10/2024",
      lugar: "Múnich",
      pais: "Alemania",
      entradas:[
        {
          id:1,
          nombreEntr: "Normal",
          precio:60,
          disponibles:300
      },
      {
        id:2,
        nombreEntr: "Vip",
        precio:80,
        disponibles:200

      },
      {
        id:3,
        nombreEntr: "Platinum",
        precio:200,
        disponibles:50

      }
    ]
    },
    {
      id: 5,
      nombre: "Carnaval de Río",
      fechaInicio: "21/02/2024",
      fechaFinalizacion: "26/02/2024",
      lugar: "Río de Janeiro",
      pais: "Brasil",
      entradas:[
        {
          id:1,
          nombreEntr: "Normal",
          precio:60,
          disponibles:300
      },
      {
        id:2,
        nombreEntr: "Vip",
        precio:80,
        disponibles:200

      },
      {
        id:3,
        nombreEntr: "Platinum",
        precio:200,
        disponibles:50

      }
    ]
    },
    {
      id: 6,
      nombre: "Diwali",
      fechaInicio: "24/10/2024",
      fechaFinalizacion: "28/10/2024",
      lugar: "Nueva Delhi",
      pais: "India",
      entradas:[
        {
          id:1,
          nombreEntr: "Normal",
          precio:60,
          disponibles:300
      },
      {
        id:2,
        nombreEntr: "Vip",
        precio:80,
        disponibles:200

      },
      {
        id:3,
        nombreEntr: "Platinum",
        precio:200,
        disponibles:50

      }
    ]
    }
  ];
}
