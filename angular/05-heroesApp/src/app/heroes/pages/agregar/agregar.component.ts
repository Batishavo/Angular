import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [ `
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
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

  constructor(
    private heroesService  : HeroesService,
    private activatedRoute : ActivatedRoute,
    private router         : Router,
    private snacBar        : MatSnackBar,
    private dialog         : MatDialog,
  ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroeById(id) )
      )
      .subscribe(heroe => this.heroe = heroe)
    ;

  }

  guardar(){
    //console.log(this.heroe.id);
    if(this.heroe.superhero.trim().length === 0){
      return;
    }
    //Actualizar
    if(this.heroe.id){
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe(heroe => this.mostrarSnakbar('Registro actualizado'));
    }  
    //Crea un nuevo registro
    else{
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe(heroe =>{
        console.log('Respuesta',heroe)
        this.router.navigate(['/heroes/editar',heroe.id]);
      })
    }
  }

  borrarHeroe(){

    const dialog = this.dialog.open( ConfirmarComponent,{
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      (result)=>{
        if(result){
          this.heroesService.borrarHeroe(this.heroe.id!)
            .subscribe(resp =>{
            this.router.navigate(['/heroes']);
          });
        }
      }
    )

    

  }

  mostrarSnakbar(mensaje: string):void{
    this.snacBar.open(mensaje,'ok!',{
      duration: 2500
    });
  }

}
