import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  //publisher para opciones
  publishers = [
    {
      id   : "DC Comics",
    },
    {
      id   : "Marvel Comics",
    },
    {
      id   : "Image Comics",
    },
    {
      id   : "Dark Horse",
    }
  ];
  //Heroe
  heroe:Heroe={
    superhero        : '',
    alter_ego        : '',
    characters       : '',
    first_appearance : '',
    publisher        : Publisher.ImageComics,
    alt_img          : '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
