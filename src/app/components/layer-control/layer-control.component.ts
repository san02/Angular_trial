import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Layer } from 'ol/layer';
import { LayerService } from 'src/app/services/layer.service';

@Component({
  selector: 'app-layer-control',
  templateUrl: './layer-control.component.html',
  styleUrls: ['./layer-control.component.css']
})
export class LayerControlComponent implements OnInit {

  public layers: Layer[];
  constructor(private layerService : LayerService) { }


  ngOnInit(): void {
    this.layers = this.layerService.getLayers();   
  }

  showMap(id:string){
      for(const layer of this.layers){
        if(layer.get('id') === id)
        {
          layer.setVisible(true);
        }
      }
  }
  hideMap(id:string){
    for(const layer of this.layers){
      if(layer.get('id') === id)
      {
        layer.setVisible(false);
      }

    }
  }

}
