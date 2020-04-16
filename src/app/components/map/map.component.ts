import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Map, View } from 'ol';
import { Tile } from 'ol/layer';
import { OSM } from 'ol/source';
import { LayerService } from 'src/app/services/layer.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit,AfterViewInit {
  constructor(private layerService : LayerService) {
      
   }

  ngAfterViewInit(): void {

    const layers = this.layerService.getLayers();;
    const view = new View({
      center: [260,40],
      projection: 'EPSG:4326',
      zoom: 6      

    }) ;
    const options= {
      target:'map',
      layers:layers,
      view: view
    };
    const map =  new Map(options);
  }

  ngOnInit(): void {
  }

}
