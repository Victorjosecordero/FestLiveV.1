// src/app/models/marker.model.ts
export class Marker {
    constructor(
      public position: google.maps.LatLngLiteral,
      public title: string,
      public description: string,
      public proximosEventos: string[],
      public img: string,
      public icon?: string, 
      public animation?: google.maps.Animation,
      public infoWindowContent?: string
    ) {}
  }
  
  
