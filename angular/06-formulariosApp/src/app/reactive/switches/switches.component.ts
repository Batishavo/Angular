import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {
  
  miFormulario:FormGroup= this.fb.group({
    genero: ['XY',Validators.required],
    notificaciones:[true,Validators.required]
  });

  persona = {
    cromosoma:'XX',
    nitificaciones:true,
  }

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
  }

}
