import { Injectable } from '@angular/core';
import { OSM, ImageWMS, TileWMS } from 'ol/source';
import { Layer, Tile as TileLayer, Image as ImageLayer} from 'ol/layer';

@Injectable({
  providedIn: 'root'
})
export class LayerService {
  private layers: Layer[];

  public getLayers(){

    return this.layers;
  }

  constructor() {
    const input = {
      source: new OSM(),
      visible:true
    };
    const baseLayer = new TileLayer(input);

    baseLayer.set('id', 'baseLayer');
    const simple = new ImageLayer({
      source: new ImageWMS({
      url: 'https://ahocevar.com/geoserver/wms',
      params: {'LAYERS': 'ne:ne'},
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
      }),
      visible: true
      });
      simple.set('id', 'simple');
      
      const states = new TileLayer({
      source: new TileWMS({
      url: 'https://ahocevar.com/geoserver/wms',
      params: {
      'LAYERS': 'topp:states',
      'TILED': true
      },
      serverType: 'geoserver',
      transition: 0
      }),
      visible: true
      });
      states.set('id', 'states');

    this.layers = [baseLayer, simple, states]
    
   }
}
