import { Component} from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Feature } from '../../interfaces/palces.interfaces';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-searc-result',
  templateUrl: './searc-result.component.html',
  styleUrls: ['./searc-result.component.css']
})
export class SearcResultComponent {

  public selectedId:string='';

  constructor(
    private placesService: PlacesService,
    private mapService : MapService
  ) { }

  get isLoadingPlaces(): boolean{
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[]{
    return this.placesService.places;
  }

  flyTo(place:Feature){
    this.selectedId = place.id;
    const [lng,lat]=place.center;
    this.mapService.flyTo([lng,lat]);
  }
}
