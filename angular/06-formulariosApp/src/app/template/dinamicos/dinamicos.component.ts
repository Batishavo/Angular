import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre:string;
  favoritos:Favorito[];
}

interface Favorito{
  nombre:string;
  id:number;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})

export class DinamicosComponent implements OnInit {
  nuevoJuego:string ="";
  persona: Persona={
    nombre: 'Fernando',
    favoritos:[
      {
        id:1,
        nombre:'Metal Gear'
      },
      {
        id:2,
        nombre:'Metal Gear 2'
      }
    ]
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  guardar(){
    console.log('Formulario posteado');
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1)
  }
  agregar(){
    const juego: Favorito ={
      id: this.persona.favoritos.length +1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...juego});
    this.nuevoJuego = '';
  }
}
