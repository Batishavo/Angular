import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesServiceService } from '../../services/paises-service.service';
import { PaisService } from '../../../../../../03-paisesApp/src/app/pais/services/pais.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region   : ['',Validators.required],
    pais     : ['',Validators.required],
    frontera : ['',Validators.required],
    //frontera : [{value:'',disabled: true},Validators.required]
  });

  // llenar selectores

  regiones  : string   [] = [];
  paises    : PaisSmall[] = [];
  //fronteras : string   [] = [];
  fronteras : PaisSmall[] = [];
  ///UI
  cargando:boolean = false;

  constructor(
    private fb: FormBuilder,
    private paisesService: PaisesServiceService,
  ) { }

  ngOnInit(): void {

    this.regiones = this.paisesService.regiones;
    //Cuando cambie la region
    /*this.miFormulario.get('region')?.valueChanges
      .subscribe( region =>{
        console.log(region);
        this.paisesService.getPaisePorRegion(region)
          .subscribe(paises =>{
            console.log(paises);
            this.paises = paises;
          })
      })*/
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( (_)  => {
          this.miFormulario.get('pais')?.reset('');
          //this.miFormulario.get('frontera')?.disable();
          this.cargando = true;
          
        }),
        switchMap( region=>this.paisesService.getPaisePorRegion(region))
      )
      .subscribe(paises =>{
        this.cargando = false;
        this.paises = paises; 
      }
    );
    //Cuando cambia de pais
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap((_)=>{
          this.fronteras=[];
          this.miFormulario.get('frontera')?.reset('');
          //this.miFormulario.get('frontera')?.enable();
          this.cargando = true;
        }),
        switchMap(codigo =>this.paisesService.getPaisPorCodigo(codigo)),
        switchMap(pais => this.paisesService.getPaisesPorCodigos( pais?.borders! ))
      )
      .subscribe(paises =>{
        //this.fronteras = pais?.borders || [];
        console.log(paises);
        this.fronteras = paises;
        this.cargando = false;
      }
    );

  }

  guardar(){
    console.log(this.miFormulario.valid);
  }

}
