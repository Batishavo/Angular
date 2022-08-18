import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
})
export class CapitalTablaComponent implements OnInit {

  @Input () capitales: Country[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
