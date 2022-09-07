import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  label: string[]=[];
  values:number[]=[];

  constructor(
    private GraficasService: GraficasService
  ) { }

  ngOnInit(): void {
    this.GraficasService.getUsuariosRedesSociales()
    .subscribe(data=>{
      console.log(data);
      this.label = Object.keys(data);
      this.values = Object.values(data);
     //console.log(this.label);
    }
  );
    
  }

 

}
