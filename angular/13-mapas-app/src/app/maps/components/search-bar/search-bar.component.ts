import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  private debounceTimer?: NodeJS.Timeout;

  constructor(
    private placesService: PlacesService,
  ) { }

  onQueryChanged(query:string =''){
    if(this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer=setTimeout(() =>{
      this.placesService.getPlacesByQuery(query);
      //console.log('Mandar este query',query)
    },350);
  }

}
