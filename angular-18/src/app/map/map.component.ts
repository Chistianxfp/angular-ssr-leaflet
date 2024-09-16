import { Component, inject, PLATFORM_ID } from '@angular/core';
import { LeafletService } from '../services/leaflet.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  private leafletService = inject(LeafletService);
  private L = this.leafletService.L;
  map: MapComponent | undefined;

  ngOnInit(){
    if(this.L){
      this.map = this.L.map('map', {center: [51.505, -0.09], zoom: 3});

      const tiles = this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.map);
    }
  }
}
