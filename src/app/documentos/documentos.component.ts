import { CommonModule } from '@angular/common';
import { Component, ViewChild,OnInit, Renderer2 , AfterViewInit} from '@angular/core';
import {GoogleMapsModule, MapMarker, MapInfoWindow} from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { Marker } from './marker';


@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [GoogleMapsModule,MapMarker,CommonModule,],
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.css'
})
export class DocumentosComponent implements OnInit,AfterViewInit {
  constructor(private renderer: Renderer2) {}
 

  markers: Marker[] = [];
  infoWindows: google.maps.InfoWindow[] = [];
  markerPositions: google.maps.LatLngLiteral[] = [];

  ngAfterViewInit(): void {
    // Espera un poco antes de aplicar los estilos
    setTimeout(() => {
      this.applyCustomStyles();
    }, 1500); // 500 ms debería ser suficiente
  }


  applyCustomStyles(): void {
    const infoWindows = document.querySelectorAll('.gm-style .gm-style-iw-c');
    infoWindows.forEach(infoWindow => {
      (infoWindow as HTMLElement).style.backgroundColor = 'black';
      (infoWindow as HTMLElement).style.padding = '10px';
      (infoWindow as HTMLElement).style.borderRadius = '5px';
      // Otros estilos que desees aplicar
    });

    const infoWindows1 = document.querySelectorAll('.gm-style .gm-style-iw-c .gm-style-iw-d');
    infoWindows1.forEach(infoWindow => {
      (infoWindow as HTMLElement).style.overflow = 'hidden';
      // Otros estilos que desees aplicar
    });
    
  }


  ngOnInit(): void {
    const ubicacionBarcelona: google.maps.LatLngLiteral = { lat: 41.3851, lng: 2.1734 };
    const ubicacionMadrid: google.maps.LatLngLiteral = { lat: 40.4380981, lng: -3.6946901 };
    const ubicacionSevilla: google.maps.LatLngLiteral = { lat: 37.3708646, lng: -6.008465 };
    const ubicacionMalaga: google.maps.LatLngLiteral = { lat: 36.7019646, lng: -4.43512 };
    const ubicacionPalmaMallorca: google.maps.LatLngLiteral = { lat: 39.5812095, lng: 2.622975 };
    const ubicacionValencia: google.maps.LatLngLiteral = { lat: 39.4394425, lng: -0.4329486 };

    this.markers.push(new Marker(ubicacionBarcelona, 'Barcelona', 'Información adicional sobre Barcelona',['OktoberFest','Primavereando','Nicky Jam Tour'],"assets/malaga.webp","assets/iconos/musica.png",google.maps.Animation.BOUNCE));
    this.markers.push(new Marker(ubicacionMadrid, 'Madrid', 'Información adicional sobre Madrid',['Rio Babel','Nicky Jam Tour','Maria Becerra Tour'],"assets/madrid.jpg","assets/iconos/musica.png",google.maps.Animation.BOUNCE));
    this.markers.push(new Marker(ubicacionSevilla, 'Sevilla', 'Información adicional sobre Sevilla',['Puro Latino Fest','Love the 90s Reggaeton Edition','Daddy Yankee Tour'],"assets/malaga.webp","assets/iconos/musica.png",google.maps.Animation.BOUNCE));
    this.markers.push(new Marker(ubicacionMalaga, 'Malaga', 'Información adicional sobre Malaga',['Medusa Sunbeach Festival','Marenostrum Xperience','Puro Latino Fest'],"assets/malaga.webp","assets/iconos/musica.png",google.maps.Animation.BOUNCE));
    this.markers.push(new Marker(ubicacionPalmaMallorca, 'Palma de Mallorca', 'Información adicional sobre Palma de Mallorca',['Reggaeton Beach Festival','Arenal Sound','Dreambeach Villaricos'],"assets/malaga.webp","assets/iconos/musica.png",google.maps.Animation.BOUNCE));
    this.markers.push(new Marker(ubicacionValencia, 'Valencia', 'Información adicional sobre Valencia',['Marenostrum Xperience','Big Sound Festival','Daddy Yankee Tour'],"assets/malaga.webp","assets/iconos/musica.png",google.maps.Animation.BOUNCE));

    this.markerPositions.push(ubicacionBarcelona);
    this.markerPositions.push(ubicacionMadrid);
    this.markerPositions.push(ubicacionSevilla);
    this.markerPositions.push(ubicacionMalaga);
    this.markerPositions.push(ubicacionPalmaMallorca);
    this.markerPositions.push(ubicacionValencia);

    this.markers.forEach(marker => {
      let eventosHTML = ''; // Creamos una cadena vacía para almacenar el HTML de los eventos
      marker.proximosEventos.forEach(evento => {
        eventosHTML += `<li>${evento}</li>`; // Agregamos cada evento a la cadena HTML
      });
      marker.infoWindowContent = `
      <div class="infowindow" style="background-color:black;padding:10px;border-radius:5px;">
      <h3>${marker.title}</h3>
      <img src="${marker.img}" width="250px"">
      <p class="mt-3">${marker.description}</p>
      <p>Proximos eventos:</p>
      <ul>${eventosHTML}</ul>
      </div>`;
    });

    this.initMap();
  }
   estilo_mapa = [{
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [{
            "saturation": "-100"
        },
        {
            "lightness": "17"
        },
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "administrative.province",
    "elementType": "all",
    "stylers": [{
        "visibility": "on"
    }]
},
{
    "featureType": "administrative.locality",
    "elementType": "all",
    "stylers": [{
        "visibility": "on"
    }]
},
{
    "featureType": "administrative.neighborhood",
    "elementType": "all",
    "stylers": [{
            "visibility": "on"
        },
        {
            "saturation": "-100"
        },
        {
            "lightness": "5"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
            "visibility": "on"
        },
        {
            "saturation": "-100"
        },
        {
            "lightness": "51"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
        "visibility": "simplified"
    }]
},
{
    "featureType": "poi.attraction",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "poi.business",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "poi.government",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "poi.medical",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "poi.place_of_worship",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "poi.school",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "poi.sports_complex",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
        "saturation": "-100"
    }]
},
{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{
        "visibility": "simplified"
    }]
},
{
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "road.arterial",
    "elementType": "all",
    "stylers": [{
            "lightness": "30"
        },
        {
            "saturation": "0"
        },
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [{
        "visibility": "simplified"
    }]
},
{
    "featureType": "road.local",
    "elementType": "all",
    "stylers": [{
            "lightness": "-5"
        },
        {
            "saturation": "-100"
        },
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [{
            "saturation": "-100"
        },
        {
            "lightness": "-5"
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [{
            "saturation": "-100"
        },
        {
            "lightness": "-5"
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
            "saturation": -100
        },
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "labels",
    "stylers": [{
        "visibility": "simplified"
    }]
},
{
    "featureType": "transit.line",
    "elementType": "all",
    "stylers": [{
        "visibility": "simplified"
    }]
},
{
    "featureType": "transit.station",
    "elementType": "labels",
    "stylers": [{
        "visibility": "off"
    }]
},
{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
            "lightness": -25
        },
        {
            "saturation": -97
        },
        {
            "color": "#c2dae8"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [{
            "lightness": -25
        },
        {
            "saturation": -100
        }
    ]
}
];

   

  initMap(): void {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 40.416775, lng: -3.703790 },
      zoom: 6,
      disableDefaultUI: true,
      styles: this.estilo_mapa
    });

    this.markers.forEach(markerData => {
      const marker = new google.maps.Marker({
        position: markerData.position,
        map: map,
        title: markerData.title,
        icon: markerData.icon,
        animation: markerData.animation
      });

      const infoWindow = new google.maps.InfoWindow({
        content: markerData.infoWindowContent
      });

      marker.addListener('click', () => {
        this.closeAllInfoWindows();
        infoWindow.open(map, marker);

      });
      map.addListener('click', () => {
        this.closeAllInfoWindows();
      });

      this.infoWindows.push(infoWindow);
    });
  }

  closeAllInfoWindows(): void {
    this.infoWindows.forEach(infoWindow => infoWindow.close());
  }





}
