import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesServiceService } from '../../services/paises-service.service';
import { PaisService } from '../../../../../../03-paisesApp/src/app/pais/services/pais.service';
import { PaisSmall } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['',Validators.required],
    pais: ['',Validators.required]
  });

  // llenar selectores

  regiones: string[] = [];
  paises: PaisSmall[]=[];

  constructor(
    private fb: FormBuilder,
    private paisesService: PaisesServiceService,
  ) { }

  ngOnInit(): void {

    this.regiones = this.paisesService.regiones;
    //Cuando cambie la region
    this.miFormulario.get('region')?.valueChanges
      .subscribe( region =>{
        console.log(region);
        this.paisesService.getPaisePorRegion(region)
          .subscribe(paises =>{
            console.log(paises);
            this.paises = paises;
          })
      })

  }

  guardar(){
    console.log(this.miFormulario.valid);
  }

}
